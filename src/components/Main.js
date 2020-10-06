import React from 'react';

function Main(props) {
    
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__info">
                <button className="profile__avatar" onClick={props.onEditAvatar} type="button"></button>
                <div className="profile__data" >
                    <div className="profile__wrap">
                        <h1 className="profile__name">Елена Стрижакова</h1>
                        <button className="profile__edit-button hover" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__occupation">Начинающий веб-разработчик и&nbsp;опытный моряк-путешественник</p>
                </div>
            </div>
            <button className="profile__add-button hover" onClick={props.onAddPlace}>+</button>
        </section>
        <section className="elements">
            <ul className="elements__list">
            </ul>
        </section>
        <div className="spinner spinner_hidden"><i></i></div>
    </main>
    )
}

export default Main;