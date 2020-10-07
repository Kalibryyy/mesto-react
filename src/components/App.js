import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function closeAllPopups () {
    if (isEditAvatarPopupOpen) {
      setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    } else if (isEditProfilePopupOpen) {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    } else if (isAddPlacePopupOpen) {
      setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    } else if (selectedCard.link) {
      setSelectedCard(!selectedCard.link);
    }
  }

  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick (card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onClose={closeAllPopups} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name={'profile'} title={'Редактировать профиль'} children={<><input id="profile-name-input" type="text" className="modal__input modal__input_type_name" name="name" value="Елена Стрижакова" placeholder="Елена Стрижакова" minLength="2" maxLength="40" required />
            <span id="profile-name-input-error"></span>
            <input id="profile-occupation-input" type="text" className="modal__input modal__input_type_occupation" name="link" value="Начинающий веб-разработчик и опытный моряк-путешественник" placeholder="Начинающий веб-разработчик и опытный моряк-путешественник"
                minLength="2" maxLength="200" required />
            <span id="profile-occupation-input-error"></span></>} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} isClose={isEditProfilePopupOpen}/>
      <PopupWithForm name={'new-card'} title={'Новое место'} children={<><input id="card-name-input" type="text" className="modal__input modal__input_type_name" name="name" placeholder="Название" minLength="1" maxLength="30" required />
            <span id="card-name-input-error"></span>
            <input id="card-occupation-input" type="url" className="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-occupation-input-error"></span></>} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} isClose={isAddPlacePopupOpen}/>
      <PopupWithForm name={'confirm-card-del'} title={'Вы уверены?'} />
      <PopupWithForm name={'avatar'} title={'Обновить аватар'} children={<><input id="card-avatar-input" type="url" className="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-avatar-input-error"></span></>} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} isClose={isEditAvatarPopupOpen}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
