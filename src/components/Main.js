import React from 'react';

function Main(props) {
    
    return (
        <main className="content">
        <section className="profile">
            <div className="profile__info">
                <div className="profile__avatar" onClick={props.handleEditAvatarClick}></div>
                <div className="profile__data" >
                    <div className="profile__wrap">
                        <h1 className="profile__name">Елена Стрижакова</h1>
                        <button className="profile__edit-button hover" type="button" onClick={props.handleEditProfileClick}></button>
                    </div>
                    <p className="profile__occupation">Начинающий веб-разработчик и&nbsp;опытный моряк-путешественник</p>
                </div>
            </div>
            <button className="profile__add-button hover" onClick={props.handleAddPlaceClick}>+</button>
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