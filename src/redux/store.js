  const ADD_POST = 'ADD-POST';
  const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

  const SEND_MESSAGE = 'SEND-MESSAGE';
  const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
  
  
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
            newMessageBody: '',
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
        this._callSubscriber(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
      }  else if (action.type === SEND_MESSAGE) {
        let body = {
          id: 6,
          message: this._state.dialogsPage.newMessageBody,
        }

        this._state.dialogsPage.messages.push(body);
        this._state.dialogsPage.newMessageBody = '';
        this._callSubscriber(this._state);

      }
    }
    
  
 } 


 export const addPostCreator = () => ({type: ADD_POST});

 export const updateNewPostTextCreator = (text) => ({
     type: UPDATE_NEW_POST_TEXT,
     newText: text});


 export const sendMessageCreator = () => ({type: SEND_MESSAGE});

 export const updateNewMessageBodyCreator = (body) => ({
     type: UPDATE_NEW_MESSAGE_BODY,
     body});

export default store;  