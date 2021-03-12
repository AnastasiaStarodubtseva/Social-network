let rerenderEntireTree = () => {
  console.log('state was changed');
}

let state = {
  profilePage: {
    posts: [
      {id: '1', message: 'Hi, how are you', likesCount: 12},
      {id: '2', message: 'It\'s my first post', likesCount: 10}
    ],
    newPostText: ''
  },
  dialogsPage: {
    dialogs: [
      {id: '1', name: 'Francis'},
      {id: '2', name: 'Benjamin'},
      {id: '3', name: 'Olivia'},
      {id: '4', name: 'Kate'},
      {id: '5', name: 'Sean'},
      {id: '6', name: 'Clifford'}
    ],
    messages: [
      {id: '1', message: 'Hi!'},
      {id: '2', message: 'How are you?'},
      {id: '3', message: 'What is your name?'},
      {id: '4', message: 'How old are you?'},
      {id: '5', message: 'Have a good day!'},
      {id: '6', message: 'Good bye!'}
    ]
  },
  sidebar: {}
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;