
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
        
    }
}
