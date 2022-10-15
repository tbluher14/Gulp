// Actions:
const GET_ALL_BUSINESSES = 'businesses/GET_ALL_BUSINESSES'
const CREATE_BUSINESS = "businesses/CREATE_BUSINESS";
const UPDATE_BUSINESS = "businesses/UPDATE_BUSINESS";
const DELETE_BUSINESS = "businesses/DELETE_BUSINESS";
//****************************************************************************************************

// Action Creators:
export const getAllBusinessesAC = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    payload: businesses,
})

export const createBusinessesAC = (business) => ({
    type: CREATE_BUSINESS,
    payload: business,
})

export const updateBusinessesAC = (business) => ({
    type: UPDATE_BUSINESS,
    payload: business,
})

export const deleteBusinessesAC = (businessId) => ({
    type: DELETE_BUSINESS,
    payload: businessId,
})

//****************************************************************************************************

// Thunks
export const getAllBusinessesThunk = () => async (dispatch) => {
    const res = await fetch('/api/business/');
    if (res.ok) {
        const business = await res.json()
        dispatch(getAllBusinessesAC(business.businesses))
        return business
    }
}

export const createBusinessThunk = (business) => async (dispatch) => {
    const res = await fetch('/api/business/create_business', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(business)
    });
    if (res.ok) {
        const business = await res.json()
        console.log('this is business', business)
        dispatch(createBusinessesAC(business))
        return business
    }
}

export const editBusinessThunk = (business, businessId) => async (dispatch) => {
    const res = await fetch(`/api/business/${businessId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(business)
    });
    if (res.ok) {
        const business = await res.json()
        console.log('this is edited business', business)
        dispatch(updateBusinessesAC(business))
        return business
    }
}

// delete Thunk
export const deleteBusinessThunk = (businessId) => async (dispatch) => {
    const res = await fetch(`/api/business/${businessId}`, {
        method: 'DELETE',
    });
    if (res.ok){
    dispatch(deleteBusinessesAC(businessId))
}}

//****************************************************************************************************

// Business Reducer

const intialState = {};
const businessReducer = (state = intialState, action) => {
    let newState;
    switch (action.type){
        case GET_ALL_BUSINESSES:
            newState = {}
            // console.log("this is action", action)
            action.payload.forEach((business) => {
                newState[business.id] = business
            })
            // console.log("this is newstate", newState)
            return newState;
        case CREATE_BUSINESS:
            newState = {...state}
            console.log('this is state', newState)
            console.log('this is action', action)
            return newState;
        case UPDATE_BUSINESS:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState;
        case DELETE_BUSINESS:
            newState = {...state}
            delete newState[action.payload]
            return newState;
        default:
            return state
    }
}

export default businessReducer
