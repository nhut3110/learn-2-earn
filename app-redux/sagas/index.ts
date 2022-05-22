import { takeLatest } from 'redux-saga/effects';

import { 
  LOGIN
} from '../constant/actions';

import { 
  login, 
} from '../sagas/auth';

export default function* root() {
  yield takeLatest(LOGIN, login);
}