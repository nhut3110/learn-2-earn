import { combineReducers } from 'redux';
import { State } from '@/app-redux/entities/state';
import { UserReducer } from './user';

const reducer = combineReducers<State>({
  user: UserReducer,
});

export const initState:State = {
  user: {}, 
};

export default reducer;