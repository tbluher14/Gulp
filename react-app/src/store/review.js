// Actions:
const GET_ALL_REVIEWS= 'reviews/GET_ALL_REVIEWS'
const CREATE_REVIEW = "reviews/CREATE_REVIEW";
const UPDATE_REVIEW = "reviews/UPDATE_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";
//****************************************************************************************************

// Action Creators:
export const getAllReviewsAC = (reviews) => ({
    type: GET_ALL_REVIEWS,
    payload: reviews,
})

// export const createBusinessesAC = (business) => ({
//     type: CREATE_BUSINESS,
//     payload: business,
// })

// export const updateBusinessesAC = (business) => ({
//     type: UPDATE_BUSINESS,
//     payload: business,
// })

// export const deleteBusinessesAC = (businessId) => ({
//     type: DELETE_BUSINESS,
//     payload: businessId,
// })

//****************************************************************************************************

// Thunks

export const getAllReviewsThunk = () => async (dispatch) => {
    const res = await fetch('/api/review/');
    if (res.ok) {
        const review = await res.json()
        dispatch(getAllReviewsAC(review.reviews))
        return review
    }
}

//****************************************************************************************************

// Business Reducer
const initialState = {}
const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_ALL_REVIEWS:
            newState = action.payload
            return newState
        default:
            return state
    }
}


export default reviewReducer
