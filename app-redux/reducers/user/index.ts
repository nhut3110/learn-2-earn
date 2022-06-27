import { Action } from '../../entities/action';
import { SET_USER } from '../../constant/actions';
import { User } from "../../../entities";

export function UserReducer(
  state:any=null, 
  action: Action<User>
) {
if (action.type === SET_USER) {
    return action.payload;
  }
  return state; 
}