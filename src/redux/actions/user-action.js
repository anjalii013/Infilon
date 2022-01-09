import { ActionTypes } from '../constants/action-type'

export const setUsers = (users) => {
  return {
    type: ActionTypes.SET_USERS,
    payload: users,
  }
}
