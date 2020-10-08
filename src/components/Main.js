import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState('Жак Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState('https://images.unsplash.com/photo-1559962219-f52ccd86944e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80');
    const [userId, setUserId] = React.useState(null);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getAppInfo('users/me', 'cards')
          .then((data) => {
            const [userData, cardsArray] = data;
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setUserId(userData._id);
            setCards(cardsArray)
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <main className="content">
        <section className="profile">
            <div className="profile__info">
                <button className="profile__avatar" onClick={props.onEditAvatar} type="button" style={{ backgroundImage: `url(${userAvatar})` }}></button>
                <div className="profile__data" >
                    <div className="profile__wrap">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button hover" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__occupation">{userDescription}</p>
                </div>
            </div>
            <button className="profile__add-button hover" onClick={props.onAddPlace}>+</button>
        </section>
        <section className="elements">
            <ul className="elements__list">
                {cards.map((card) => (
                    <li className="elements__item" key={card._id}>
                        <Card card={card} onCardClick={props.onCardClick} userId={userId}/>
                    </li> 
                ))}
            </ul>
        </section>
        <div className="spinner spinner_hidden"><i></i></div>
    </main>
    )
}

export default Main;