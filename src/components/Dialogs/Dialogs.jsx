import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from '././Dialogs.module.css';

const Dialogs = (props) => {

  let dialogs = [
    {id: '1', name: 'Francis'},
    {id: '2', name: 'Benjamin'},
    {id: '3', name: 'Olivia'},
    {id: '4', name: 'Kate'},
    {id: '5', name: 'Sean'},
    {id: '6', name: 'Clifford'}
  ]

  let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

  let messages = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'What is your name?'},
    {id: '4', message: 'How old are you?'},
    {id: '5', message: 'Have a good day!'},
    {id: '6', message: 'Good bye!'}
  ]

  let messagesElements = messages.map(m => <Message message={m.message}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;