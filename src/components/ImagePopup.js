import React from 'react'; 

function ImagePopup() {
    return (
        <div className="modal modal_type_picture">
        <div className="modal__overlay modal__overlay_image"></div>
        <div className="modal__wrapper">
            <img src="./images/element-usa.JPG" alt="Название места" className="modal__picture-image" />
            <p className="modal__picture-text"></p>
            <img src="./images/close-icon.svg" alt="закрывающая иконка" className="modal__close hover" />
        </div>
    </div>
    )
}

export default ImagePopup;