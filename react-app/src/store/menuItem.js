// Actions:
const GET_ALL_MENU_ITEMS = 'menu_items/GET_ALL_MENU_ITEMS'

//****************************************************************************************************


// Action Creators:
export const getAllMenuItemsAC = (menuItems) => ({
  type: GET_ALL_MENU_ITEMS,
  payload: menuItems
})


//****************************************************************************************************

// Thunks
// get all menu items thunk
export const getAllMenuItemsThunk = () => async (dispatch) => {
  const res = await fetch('/api/menu_items/');
  if (res.ok) {
    const menuItems = await res.json()
    dispatch(getAllMenuItemsAC(menuItems.menuItems))
    return menuItems
  }
}


//****************************************************************************************************

// MenuItems Reducer
const initialState = {}
const menuItemsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_MENU_ITEMS:
      action.payload.forEach(menuItem => {
        newState[menuItem.id] = menuItem
      })
      return newState
    default:
      return state
  }
}


export default menuItemsReducer
