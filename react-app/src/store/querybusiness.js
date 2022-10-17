const SEARCH_BUSINESS = 'businesses/SEARCH_BUSINESS';


export const searchBusinessAC = (businesses) => ({
  type: SEARCH_BUSINESS,
  payload: businesses,
})

// search thunk
export const searchBusinessThunk = (name) => async (dispatch) => {
  const res = await fetch(`/api/business/search?name=${name}`)
  if (res.ok) {
      const businesses = await res.json()
      dispatch(searchBusinessAC(businesses))
      return res
  }
}

const intialState = {};
const queryBusinessReducer = (state = intialState, action) => {
  let newState = {...state}
  switch (action.type){
    case SEARCH_BUSINESS:
      newState = {}
      action.payload.businesses.forEach(business => {
        console.log('this is action payload business', business)
        newState[business.id] = business
      })
      // action.payload.forEach((business) => {
      //   newState[business.id] = business
      // })
      console.log("this is query business action", action)
      console.log("this is query business newstate", newState)
      return newState;
    default:
      return state
  }
}

export default queryBusinessReducer;
