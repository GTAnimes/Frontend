import { SET_USER, LOGOUT_USER, UserActionTypes } from './actionTypes';
import { UserState } from './userReducer';

export const login = (user: UserState): UserActionTypes => ({
  type: SET_USER,
  payload: user,
});

export const logout = (): UserActionTypes => ({
  type: LOGOUT_USER,
});
