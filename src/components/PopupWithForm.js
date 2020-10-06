import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`modal modal_type_${props.name} props.isOpen ? modal_opened}`}> {/*profile*/} 
        <div className="modal__overlay"></div>
        <form className={`modal__container modal__container_type_${props.name}`} noValidate>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" className="modal__close hover" />
            <h2 className="modal__title">Редактировать профиль</h2>
            {/*props.children*/}
            {/* <input id="profile-name-input" type="text" className="modal__input modal__input_type_name" name="name" value="Елена Стрижакова" placeholder="Елена Стрижакова" minLength="2" maxLength="40" required />
            <span id="profile-name-input-error"></span>
            <input id="profile-occupation-input" type="text" className="modal__input modal__input_type_occupation" name="link" value="Начинающий веб-разработчик и опытный моряк-путешественник" placeholder="Начинающий веб-разработчик и опытный моряк-путешественник"
                minLength="2" maxLength="200" required />
            <span id="profile-occupation-input-error"></span> */}
            <button type="submit" className="modal__btn" disabled>
        Сохранить
      </button>
        </form>
    </div>
    )
}

export default PopupWithForm;