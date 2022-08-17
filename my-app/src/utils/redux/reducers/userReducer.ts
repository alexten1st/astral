import {
    LOG_IN,
    LOG_OUT
  } from "../actionTypes";
  
  export interface userState {
    currentUser: boolean
  } 
  function userReducer(state:userState = { currentUser: false}, action: { type: any; payload: any; }) {
    switch (action.type) {
      case LOG_IN:
        return { ...state, currentUser: !state.currentUser };
        case LOG_OUT:
          return {...state, currentUser: !state.currentUser}
      default:
        return state;
    }
  }
  
  export default userReducer;