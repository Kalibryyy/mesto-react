import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState();

    // console.log(userName);
    // quatro veces

    const [userDescription, setUserDescription] = React.useState();
    // console.log(userDescription);

    const [userAvatar, setUserAvatar] = React.useState();
    // console.log(userAvatar);

    React.useEffect(() => {

        api.getUserInfo('users/me')
          .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
            })
            .catch(err => console.log(err));
    });

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {

        api.getInitialCards('cards')
          .then((data) => {
              setCards(data);
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
            <Card cards={cards}/>
        </section>
        <div className="spinner spinner_hidden"><i></i></div>
    </main>
    )
}

export default Main;