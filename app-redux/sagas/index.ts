import { takeLatest } from 'redux-saga/effects';

import { 
    LOGIN
} from '@/app-redux/constant/actions';

import { 
    login 
} from '@/app-redux/sagas/auth';

export default function* root() {
    takeLatest(LOGIN, login);
}