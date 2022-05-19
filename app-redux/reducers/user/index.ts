import { Action } from '../../entities/action';
import { SET_USER } from '../../constant/actions';

export function UserReducer(state:any={}, action:Action) {
  if (action.type === SET_USER) {
    return action.payload;
  }
  return state; 
}