import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import logo from '../images/logo.svg'; //не используется?
// import logo from './logo.svg';
// import './App.css';

function App() {

  // function Switch(props) {
  //   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  //   function handleClick() {
  //     setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  //   }

  
  // }

  // const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  // const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick () {
    document.querySelector('.modal_type_avatar').classList.add('modal_opened');
  }

  function handleEditProfileClick () {
    document.querySelector('.modal_type_profile').classList.add('modal_opened');
  }

  function handleAddPlaceClick () {
    document.querySelector('.modal_type_new-card').classList.add('modal_opened');
  }

  return (
    <div className="page">
      <Header />
      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
      <Footer />
      <PopupWithForm name={'profile'} title={'Редактировать профиль'} children={<><input id="profile-name-input" type="text" className="modal__input modal__input_type_name" name="name" value="Елена Стрижакова" placeholder="Елена Стрижакова" minLength="2" maxLength="40" required />
            <span id="profile-name-input-error"></span>
            <input id="profile-occupation-input" type="text" className="modal__input modal__input_type_occupation" name="link" value="Начинающий веб-разработчик и опытный моряк-путешественник" placeholder="Начинающий веб-разработчик и опытный моряк-путешественник"
                minLength="2" maxLength="200" required />
            <span id="profile-occupation-input-error"></span></>}/>
      <PopupWithForm name={'new-card'} title={'Новое место'} children={<><input id="card-name-input" type="text" className="modal__input modal__input_type_name" name="name" placeholder="Название" minLength="1" maxLength="30" required />
            <span id="card-name-input-error"></span>
            <input id="card-occupation-input" type="url" className="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-occupation-input-error"></span></>}/>
      <PopupWithForm name={'confirm-card-del'} title={'Вы уверены?'} />
      <PopupWithForm name={'avatar'} title={'Обновить аватар'} children={<><input id="card-avatar-input" type="url" className="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-avatar-input-error"></span></>}/>
      <ImagePopup />

    <template className="template template_type_default">
    <li className="elements__item">
      <img src="./images/element-trash.png" alt="" className="elements__basket" />
    <img src="#" alt="Название места" className="elements__image" />
    <div className="elements__footer">
      <h2 className="elements__text"></h2>
      <div className="elements__like-container">
        <button className="elements__like" type="button"></button>
        <div className="elements__likes-number"></div>
      </div>   
    </div>
  </li>
  </template>

</div>
  );
}

export default App;
