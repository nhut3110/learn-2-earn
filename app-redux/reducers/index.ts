import { combineReducers } from 'redux';
import { State } from '../entities/state';
import { UserReducer } from './user';

const reducer = combineReducers<State>({
  user: UserReducer,
});

export const initState:State = null; 

export default reducer;