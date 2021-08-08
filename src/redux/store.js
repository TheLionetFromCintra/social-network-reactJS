  const ADD_POST = 'ADD-POST';
  const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
  
  
  let store = {
    _state: {
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
  
      },
    },

    _callSubscriber() {
      console.log('State changed');
    },

    getState() {
      return this._state;
    },

    subscribe(observer) {
      this._callSubscriber = observer;
    }, 



    dispatch(action) {
      if (action.type === ADD_POST) {
        let newPost = {
          id: 5,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);

      } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscri_stber(this.ate);
      }
    }
    
  
 } 


 export const addPostActionCreator = () => ({type: ADD_POST});

 export const updateNewPostTextActionCreator = (text) => ({
     type: UPDATE_NEW_POST_TEXT,
     newText: text});


export default store;  