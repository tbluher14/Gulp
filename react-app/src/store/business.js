// ***************************************************************//
// Actions:
// ***************************************************************//
const GET_ALL_BUSINESSES = 'businesses/GET_ALL_BUSINESSES'
const GET_BUSINESS = 'businesses/GET_BUSINESS'


// ***************************************************************//
// Action Creators:
// ***************************************************************//

export const getAllBusinessesAC = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    businesses
})

export const getBusinessAC = (businesses) => ({
    type: GET_BUSINESS,
    businesses
})


// ***************************************************************//
// Thunks
// ***************************************************************//

// get all Businesses
export const getAllBusinessesThunk = () => async (dispatch) => {
    const res = await fetch('/api/business/all-businesses')
    if (res.ok) {
        const businessObj = res.json()
        dispatch(getAllBusinessesAC(businessObj))
    }
}


// get single Business
export const getBusinessThunk = () => async (dispatch) => {
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
