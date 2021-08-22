const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
              
              return {
                  ...state,
                  newMessageBody: '',
                  messages: [...state.messages, {id: 6, message: body}],
              };
        default:
            return state;
    }


}


export const sendMessage = () => ({type: SEND_MESSAGE});

export const updateNewMessageBody = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body});

export default dialogsReducer;