import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path='/dialogs/' + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name='Francis' id='1'/>
        <DialogItem name='Benjamin' id='2'/>
        <DialogItem name='Olivia' id='3'/>
        <DialogItem name='Kate' id='4'/>
        <DialogItem name='Sean' id='5'/>
        <DialogItem name='Clifford' id='6'/>
      </div>
      <div className={s.messages}>
        <Message message='Hi!'/>
        <Message message='How are you?'/>
        <Message message='What is your name?'/>
        <Message message='How old are you?'/>
        <Message message='Have a good day!'/>
        <Message message='Good bye!'/>
      </div>
    </div>
  )
}

export default Dialogs;