import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
             <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}><span>{props.name}</span></NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}><p>{props.message}</p></div>
    );
}

const Dialogs = (props) => {
    return (
       

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anna" id="1" />
                <DialogItem name="Andrew" id="2" />
                <DialogItem name="Vlad" id="3" />
                <DialogItem name="Me, I and Myself" id="4" />
            </div>

            <div className={s.messages}>
                <Message message="Hello, my friend!" />
                <Message message="Got ya!" />
                <Message message="Am I alive?" />
                <Message message="Yo" />
            </div>
        </div>
    );
}


export default Dialogs;