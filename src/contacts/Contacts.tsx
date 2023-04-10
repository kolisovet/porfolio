import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.form}>

                    <form className={style.form}>
                        <input className={style.input}/>
                        <input className={style.input}/>
                        <textarea className={style.textarea}/>
                    </form>
                </div>
                <button className={style.button}>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
