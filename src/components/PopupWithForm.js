import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={props.isOpen ? `modal modal_type_${props.name} modal_opened` : `modal modal_type_${props.name}`}> 
        <div className="modal__overlay"></div>
        <form className={`modal__container modal__container_type_${props.name}`} noValidate>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" className="modal__close hover" />
            <h2 className="modal__title">{props.title}</h2>
            {props.children}
            <button type="submit" className="modal__btn" disabled>
        Сохранить
      </button>
        </form>
    </div>
    )
}

export default PopupWithForm;

{/* <div>
    {isLunchTime && <h2>Время обеда!</h2>}
  </div> */}