import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Danila</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Dima</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Max</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How are you?</div>
        <div className={s.dialog}>Have a good day!</div>
        <div className={s.dialog}>Good bye!</div>
      </div>
    </div>
  )
}

export default Dialogs;