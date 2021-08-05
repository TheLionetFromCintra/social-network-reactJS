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



    let dialogs= [
        {id: 1, name: "Anna"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Vlad"}
    ];
    
    let messages= [
        {id: 1, message: "Hello, my friend"},
        {id: 2, message: "Gotcha!"},
        {id: 3, message: "Am I alive?"}
    ];


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);


    return (
       

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={s.messages}>
               {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;