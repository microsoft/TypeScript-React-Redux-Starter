// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import { User } from "models";
import { authenticate, checkIfAuthenticated } from "components";

const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

const authUser = (uid: string) => {
  return {
    type: AUTH_USER,
    uid,
  }
}

export const unauthUser = () => {
  return {
    type: UNAUTH_USER,
  }
}

const fetchingUser = () => {
  return {
    type: FETCHING_USER,
  }
}

const fetchingUserFailure = (error: string) => {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.',
  }
}

const fetchingUserSuccess  = (uid: string, user: User, timestamp: Date) => {
  return {
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

export const fetchAndHandleAuthentication = (history: any) => {
  return (dispatch: any) => {
    dispatch(fetchingUser());
    authenticate().then((user: any) => {
      dispatch(fetchingUserSuccess(user.uid, user, new Date()));
      dispatch(authUser(user.uid));
      history.push("/dashboard");
    }).catch((error) => dispatch(fetchingUserFailure(error)));
  };
}

const initialUserState: User = {
    uid: "",
    name: "",
    lastUpdated: new Date()
}

export const user = (state = initialUserState, action: any) => {
  switch (action.type) {
    case FETCHING_USER_SUCCESS :
      return {
        ...state,
        uid: action.uid,
        name: action.user.name,
        lastUpdated: action.timestamp
      }
    default :
      return state
  }
}

const initialState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  authedId: "",
}

export const users = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_USER :
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid,
      }
    case UNAUTH_USER :
      return {
        ...state,
        isAuthed: false,
        authedId: "",
      }
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case FETCHING_USER_SUCCESS:
      return action.user === null
        ? {
          ...state,
          isFetching: false,
          error: "",
        }
        : {
          ...state,
          isFetching: false,
          error: "",
          [action.uid]: user(state[action.uid], action),
        }
    default :
      return state
  }
}