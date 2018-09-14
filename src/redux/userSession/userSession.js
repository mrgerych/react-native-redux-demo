// @flow
import type { User } from '../../classes/user';
import { navigateToMain, navigateToLogin } from '../navigation/navigation';

const PREFIX = 'DEMO/USER_SESSION';
export const CLEAR_SESSION = `${PREFIX}/CLEAR_SESSION`;
export const START_SESSION = `${PREFIX}/START_SESSION`;
export const START_SESSION_SUCCESS = `${PREFIX}/START_SESSION_SUCCESS`;
export const START_SESSION_FAIL = `${PREFIX}/START_SESSION_FAIL`;

export type UserSession = {
  user: ?User,
  error: ?string,
};

const initialState = {
  user: null,
  error: null,
};

export default function userSession(
  state: UserSession = initialState,
  action: any
) {
  switch (action.type) {
    case CLEAR_SESSION:
      return initialState;
    case START_SESSION:
      return initialState;
    case START_SESSION_SUCCESS:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        error: null,
      };
    case START_SESSION_FAIL:
      return {
        ...state,
        user: null,
        error: 'error while start session',
      };
    default:
      return state;
  }
}

export function startSession(userName: string, password: string) {
  return (dispatch: Function) => {
    if (userName.length === 0 || password.length === 0) {
      return dispatch({
        type: START_SESSION_FAIL,
      });
    }

    dispatch({
      type: START_SESSION,
    });

    dispatch({
      type: START_SESSION_SUCCESS,
      payload: {
        name: userName,
      },
    });

    return dispatch(navigateToMain());
  };
}

export function logout() {
  return (dispatch: Function) => {
    dispatch({
      type: CLEAR_SESSION,
    });
    return dispatch(navigateToLogin());
  };
}
