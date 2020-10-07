import React from 'react';

function Card(props) {
return (
    <ul className="elements__list">
    {props.cards.map((card) => (
        <li className="elements__item" key={card._id}>
            <img src="./images/element-trash.png" alt="" className="elements__basket" />
            <img src={card.link} alt={card.name} className="elements__image" />
            <div className="elements__footer">
                <h2 className="elements__text">{card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like" type="button"></button>
                    <div className="elements__likes-number">{card.likes.length}</div>
                </div>   
            </div>
        </li>
    ))}
    </ul>
)
}

export default Card;