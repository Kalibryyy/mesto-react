import React from 'react';
import basketImage from '../images/element-trash.png';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    } 

    return (
        <>
            {props.card.owner._id === props.userId && <img src={basketImage} alt="иконка мусорной корзины" className="elements__basket" />}
            <img src={props.card.link} alt={props.card.name} className="elements__image" onClick={handleClick} />
            <div className="elements__footer">
                <h2 className="elements__text">{props.card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like" type="button"></button>
                    <div className="elements__likes-number">{props.card.likes.length}</div>
                </div>   
            </div>
        </>
    )       
}

export default Card;
