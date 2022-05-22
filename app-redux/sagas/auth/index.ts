import { put, call } from 'redux-saga/effects';
import * as service from './service';
import { AxiosResponse } from 'axios';

export function* login({ payload, callback }: any) {
  try {
    const { data }: AxiosResponse = yield call(service.login, payload);
    callback(null, data);
  } catch (err) {
    callback && callback(err, null);
  }
}
