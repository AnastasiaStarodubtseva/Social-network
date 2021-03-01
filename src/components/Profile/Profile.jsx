import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTkg5CG_CA9QjHyPlzZtGavaWebAl-ud_bA&usqp=CAU'/>
    <div>
      ava + discription
    </div>
    <MyPosts />
    </div>
  )
}

export default Profile;