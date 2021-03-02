import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTkg5CG_CA9QjHyPlzZtGavaWebAl-ud_bA&usqp=CAU'/>
      </div>
      <div className={s.descriptionBlock}>
        ava + discription
      </div>
    </div>
  )
}

export default ProfileInfo;