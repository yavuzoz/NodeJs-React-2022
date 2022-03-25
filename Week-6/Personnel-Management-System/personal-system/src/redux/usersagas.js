import * as types from "./actionsTypes";

import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  loadUsersSuccess,
  loadUsersError,
  createUserError,
  createUsersSuccess,
  deleteUsersSuccess,
  deleteUserError,
} from "./actions";
import { loadUsersApi, createUserApi, deleteUserApi } from "./api";

function* onCreateUsersStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 200) {
      yield put(createUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

function* onDeleteUserStartAsync(userId){
  try {
    const response = yield call(deleteUserApi, userId);
    if (response.status === 200) {
      yield delay(500)
      yield put(deleteUsersSuccess(userId));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

function* onDeleteUser(){
  while(true){
    const{ payload : userId }= yield take(types.DELETE_USERS_START);
    yield call(onDeleteUserStartAsync, userId)
  }
}

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}
function* onUpdateUserStartAsync({payload}){
   try {
     console.log("payload", payload);
   } catch (error){
     
   }
}

export function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onCreateUsers() {
  yield takeLatest(types.CREATE_USERS_START, onCreateUsersStartAsync);
}

export function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USERS_START, onUpdateUserStartAsync);
}

const userSagas = [fork(onLoadUsers), fork(onCreateUsers), fork(onDeleteUser), fork(onUpdateUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
