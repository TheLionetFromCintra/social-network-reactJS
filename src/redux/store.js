import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


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

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar =  sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
      
    }
    
  
 } 


export default store;  