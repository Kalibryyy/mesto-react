import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditPropfilePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
      api.getAppInfo('users/me', 'cards')
        .then((data) => {
          const [userData, cardsArray] = data;
          setCards(cardsArray);
          console.log(userData);
          setCurrentUser(userData);
          })
          .catch(err => console.log(`Error ${err}`));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  
  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    
    if (selectedCard.link) {
      setSelectedCard(!selectedCard.link);
    }
  }

  function handleCardDelete(id) {
    api.delete('cards', id)
    .then(() => {
      const newCards = cards.filter((c) => {
        return c._id !== id; 
      });
      setCards(newCards);
    })
    .catch(err => console.log(`Error ${err}`));
  } 

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.put('cards/likes', card._id) 
        .then((newCard) => {
        // Формируем новый массив на основе имеющегося
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
        })
        .catch(err => console.log(`Error ${err}`));
    } else {
      api.delete('cards/likes', card._id) 
        .then((newCard) => {
        // Формируем новый массив на основе имеющегося
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем стейт
        setCards(newCards);
        })
        .catch(err => console.log(`Error ${err}`));
    }
  }

  function handleUpdateUser({ name, about }) {
    api.updateInfo('users/me', { name, about })
    .then((data) => {
      console.log(data);
      setCurrentUser(data);
    })
    .catch(err => console.log(`Error ${err}`));
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <CardsContext.Provider value={cards}> 
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onClose={closeAllPopups} onCardClick={handleCardClick} cards={cards} onCardDelete={handleCardDelete} onCardLike={handleCardLike} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} isClose={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} /> 
      <PopupWithForm name={'new-card'} title={'Новое место'} children={<><input id="card-name-input" type="text" className="modal__input modal__input_type_name" name="name" placeholder="Название" minLength="1" maxLength="30" required />
            <span id="card-name-input-error"></span>
            <input id="card-occupation-input" type="url" className="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-occupation-input-error"></span></>} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} isClose={isAddPlacePopupOpen}/>
      <PopupWithForm name={'confirm-card-del'} title={'Вы уверены?'} />
      <PopupWithForm name={'avatar'} title={'Обновить аватар'} children={<><input id="card-avatar-input" type="url" className="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-avatar-input-error"></span></>} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} isClose={isEditAvatarPopupOpen}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} onCardClick={handleCardClick} />
    </div>
    </CardsContext.Provider> 
    </CurrentUserContext.Provider>
  );
}

export default App;
