import { SET_USER, LOGOUT_USER, UserActionTypes } from './actionTypes';

export interface UserState {
  userid: number;
  username: string;
  email: string;
  points: number;
}

const initialState: UserState = {
  userid: 0,
  username: '',
  email: '',
  points: 0,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
