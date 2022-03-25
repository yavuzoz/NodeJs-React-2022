import * as types from "./actionsTypes";
// DATA
export const loadUsersStart = () =>({
    type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (users) =>({
    type:types.LOAD_USERS_SUCCESS,
    payload: users,
});

export const loadUsersError = (error) =>({
    type: types.LOAD_USERS_ERROR,
    payload: error,
});
// CREATE
export const createUsersStart = (users) =>({
    type: types.CREATE_USERS_START,
    payload: users,
});

export const createUsersSuccess = () =>({
    type:types.CREATE_USERS_SUCCESS,
});

export const createUserError = (error) =>({
    type: types.CREATE_USERS_ERROR,
    payload: error,
});

// DELETE
export const deleteUsersStart = (userId) =>({
    type: types.DELETE_USERS_START,
    payload: userId,
});

export const deleteUsersSuccess = (userId) =>({
    type:types.DELETE_USERS_SUCCESS,
    payload: userId,
});

export const deleteUserError = (error) =>({
    type: types.DELETE_USERS_ERROR,
    payload: error,
});
//UPDATE
export const updateUsersStart = (userInfo) =>({
    type: types.UPDATE_USERS_START,
    payload: userInfo,
});

export const updateUsersSuccess = (userId) =>({
    type:types.UPDATE_USERS_SUCCESS,
    payload: userId,
});

export const updateUserError = (error) =>({
    type: types.UPDATE_USERS_ERROR,
    payload: error,
});