import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './basic/counter';
import register, { registerSaga } from './auth/register';

const rootReducer = combineReducers({
  counter, register

});

export function* rootSaga() {
  yield all([ registerSaga(), counterSaga()]);
}

export default rootReducer;