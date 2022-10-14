// ***************************************************************//
// Actions:
// ***************************************************************//
const GET_ALL_BUSINESSES = 'businesses/GET_ALL_BUSINESSES'


// ***************************************************************//
// Action Creators:
// ***************************************************************//

export const getAllBusinessesAC = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    payload: businesses,
})


// ***************************************************************//
// Thunks
// ***************************************************************//

// get all Businesses
export const getAllBusinessesThunk = () => async (dispatch) => {
    const res = await fetch('/api/business/')
    if (res.ok) {
        const businessObj = await res.json()
        dispatch(getAllBusinessesAC(businessObj.businesses))
        return businessObj
    }
}


// ***************************************************************//
// Business Reducer
// ***************************************************************//

const intialState = {};
const businessReducer = (state = intialState, action) => {
    let newState;
    switch (action.type){
        case GET_ALL_BUSINESSES: {
            newState = {}
            // console.log("this is action", action)
            action.payload.forEach((business) => {
                newState[business.id] = business
            })
            // console.log("this is newstate", newState)
            return newState
        }
        default:
            return state
    }
}

export default businessReducer
