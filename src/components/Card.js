import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    } 

    return (
        <>
            <img src="./images/element-trash.png" alt="" className="elements__basket" />
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