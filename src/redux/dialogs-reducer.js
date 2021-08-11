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
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = {
                id: 6,
                message: state.newMessageBody,
              }
      
              state.messages.push(body);
              state.newMessageBody = '';
            return state;
        default:
            return state;
    }


}


export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body});

export default dialogsReducer;