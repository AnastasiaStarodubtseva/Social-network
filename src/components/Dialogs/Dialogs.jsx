import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from '././Dialogs.module.css';

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = props.messages.map(m => <Message message={m.message}/>)

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