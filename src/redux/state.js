  let rerenderEntireTree = () => {
    console.log('State changed');
  }


  let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Hi, how ya doing?", likesCount: 15},
            {id: 2, message: "It is my first post!", likesCount: 20}
          ],
        newPostText: 'theLionetFromCintra',  
    },

    dialogsPage: {
        dialogs:  [
            {id: 1, name: "Anna"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Vlad"}
          ],
          messages: [
            {id: 1, message: "Hello, my friend"},
            {id: 2, message: "Gotcha!"},
            {id: 3, message: "Am I alive?"}
          ],
    },

    sidebar: {

    }

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