import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
    <div>New post</div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='17' />
        <Post message='It is my first post' likesCount='23' />
      </div>
    </div>
  )
}

export default MyPosts;