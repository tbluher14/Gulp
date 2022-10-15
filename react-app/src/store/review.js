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

export const createReviewAC = (reviews) => ({
    type: CREATE_REVIEW,
    payload: reviews,
})

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
// get all reviews thunk
export const getAllReviewsThunk = () => async (dispatch) => {
    const res = await fetch('/api/reviews/');
    if (res.ok) {
        const review = await res.json()
        dispatch(getAllReviewsAC(review.reviews))
        return review
    }
}
// Create review thunk
export const createReviewThunk = (review) => async (dispatch) => {
    const res = await fetch(`api/reviews/create_review`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(review)
    })
    if (res.ok) {
        const review = await res.json()
        console.log('this is review', review)
        dispatch(createReviewAC(review))
        return review
    }
}

// HEROKU TESTING

//****************************************************************************************************

// Review Reducer
const initialState = {}
const reviewReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_ALL_REVIEWS:
            action.payload.forEach((review) => {
                newState[review.id] = review
            })
            return newState
        case CREATE_REVIEW:
            newState = {...state}
            console.log(newState)
            return newState
        default:
            return state
    }
}


export default reviewReducer
