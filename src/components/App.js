import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditPropfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isSpinnerLoading, setIsSpinnerLoading] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    setIsSpinnerLoading(true);
      api.getAppInfo('users/me', 'cards')
        .then((data) => {
          const [userData, cardsArray] = data;
          setCards(cardsArray);
          setCurrentUser(userData);
          })
          .catch(err => console.log(`Error ${err}`))
          .finally(() => {
            setIsSpinnerLoading(false);
          });
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
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch(err => console.log(`Error ${err}`));
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar('users/me/avatar', { avatar })
    .then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    })
    .catch(err => console.log(`Error ${err}`));
  }

  function handleAddPlace({ name, link }) {
    api.addCard('cards', { name, link })
    .then((newCard) => {
      setCards([newCard, ...cards]); 
      closeAllPopups();
    })
    .catch(err => console.log(`Error ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onClose={closeAllPopups} 
      onCardClick={handleCardClick} cards={cards} onCardDelete={handleCardDelete} onCardLike={handleCardLike} isLoading={isSpinnerLoading} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} isClose={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} /> 
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} isClose={isAddPlacePopupOpen} onAddPlace={handleAddPlace}/>
      <PopupWithForm name={'confirm-card-del'} title={'Вы уверены?'} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} isClose={isEditAvatarPopupOpen} onCardClick={handleCardClick} onUpdateAvatar={handleUpdateAvatar}/> 
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
