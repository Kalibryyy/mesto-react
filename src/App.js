import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="page">
    <header class="header">
        <div class="logo"></div>
    </header>
    <main class="content">
        <section class="profile">
            <div class="profile__info">
                <div class="profile__avatar"></div>
                <div class="profile__data">
                    <div class="profile__wrap">
                        <h1 class="profile__name">Елена Стрижакова</h1>
                        <button class="profile__edit-button hover" type="button"></button>
                    </div>
                    <p class="profile__occupation">Начинающий веб-разработчик и&nbsp;опытный моряк-путешественник</p>
                </div>
            </div>
            <button class="profile__add-button hover">+</button>
        </section>
        <section class="elements">
            <ul class="elements__list">
            </ul>
        </section>
        <div class="spinner spinner_hidden"><i></i></div>
    </main>
    <footer class="footer">
        <p class="footer__copyright">© 2020. Елена Стрижакова</p>
    </footer>

    <div class="modal modal_type_profile">
        <div class="modal__overlay"></div>
        <form class="modal__container modal__container_type_edit" novalidate>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" class="modal__close hover" />
            <h2 class="modal__title">Редактировать профиль</h2>
            <input id="profile-name-input" type="text" class="modal__input modal__input_type_name" name="name" value="Елена Стрижакова" placeholder="Елена Стрижакова" minlength="2" maxlength="40" required />
            <span id="profile-name-input-error"></span>
            <input id="profile-occupation-input" type="text" class="modal__input modal__input_type_occupation" name="link" value="Начинающий веб-разработчик и опытный моряк-путешественник" placeholder="Начинающий веб-разработчик и опытный моряк-путешественник"
                minlength="2" maxlength="200" required />
            <span id="profile-occupation-input-error"></span>
            <button type="submit" class="modal__btn" disabled>
        Сохранить
      </button>
        </form>
    </div>
    <div class="modal modal_type_new-card">
        <div class="modal__overlay"></div>
        <form class="modal__container modal__container_type_add" novalidate>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" class="modal__close hover" />
            <h2 class="modal__title">Новое место</h2>
            <input id="card-name-input" type="text" class="modal__input modal__input_type_name" name="name" placeholder="Название" minlength="1" maxlength="30" required />
            <span id="card-name-input-error"></span>
            <input id="card-occupation-input" type="url" class="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-occupation-input-error"></span>
            <button type="submit" class="modal__btn" disabled>
        Сохранить
      </button>
        </form>
    </div>

    <div class="modal modal_type_confirm-card-del">
        <div class="modal__overlay"></div>
        <form class="modal__container modal__container_type_confirm-card-del" novalidate>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" class="modal__close hover" />
            <h2 class="modal__title">Вы уверены?</h2>
            <button type="submit" class="modal__btn">
        Да
      </button>
        </form>
    </div>

    <div class="modal modal_type_avatar">
        <div class="modal__overlay"></div>
        <form class="modal__container modal__container_type_avatar" novalidate>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" class="modal__close hover" />
            <h2 class="modal__title">Обновить аватар</h2>
            <input id="card-avatar-input" type="url" class="modal__input modal__input_type_occupation" name="link" placeholder="Ссылка на картинку" required />
            <span id="card-avatar-input-error"></span>
            <button type="submit" class="modal__btn">
        Сохранить
      </button>
        </form>
    </div>

    <div class="modal modal_type_picture">
        <div class="modal__overlay modal__overlay_image"></div>
        <div class="modal__wrapper">
            <img src="./images/element-usa.JPG" alt="Название места" class="modal__picture-image" />
            <p class="modal__picture-text"></p>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" class="modal__close hover" />
        </div>
    </div>

    <template class="template template_type_default">
    <li class="elements__item">
      <img src="./images/element-trash.png" alt="" class="elements__basket" />
    <img src="#" alt="Название места" class="elements__image" />
    <div class="elements__footer">
      <h2 class="elements__text"></h2>
      <div class="elements__like-container">
        <button class="elements__like" type="button"></button>
        <div class="elements__likes-number"></div>
      </div>   
    </div>
  </li>
  </template>

</div>
  );
}

export default App;
