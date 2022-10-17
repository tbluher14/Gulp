const GET_ALL_USERS = 'session/GET_ALL_USERS';

const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  payload: users
})


export const getAllUsersThunk = () => async (dispatch) => {
  const res = await fetch('/api/users/');
  if (res.ok) {
    const users = await res.json()
    // console.log('this is users', users)
    dispatch(getAllUsers(users))
    return users
  }
}

const initialState = {}
export default function usersReducer(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case GET_ALL_USERS:
      // console.log('this is action', action)
      action.payload.users.forEach(user => {
        newState[user.id] = user
        })
      // console.log('this is new state', newState)
      return newState
    default:
      return state;
  }
}
