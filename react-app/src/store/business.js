
// Actions

const GET_ALL_BUSINESSES = 'businesses/GET_ALL_BUSINESSES'


// Action Creators:

export const getAllBusinesses = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    businesses
})


// Thunks

export const getAllSpots = () => async (dispatch) => {
    const res = await fetch('/api/business')
    if (res.ok) {
        const businessObj = res.json()
        dispatch(getAllBusinesses(businessObj))
    }
}


// Business Reducer
const intialState = {};
const businessReducer = (state = intialState, action) => {
    let newState;
    switch (action.type){
        case GET_ALL_BUSINESSES: {
            newState = {}
            action.businesses.forEach(business => newState[business.id] = business)
            return newState
        }
        default:
            return state
    }
}

export default businessReducer
