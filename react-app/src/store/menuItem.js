// Actions:
const GET_ALL_MENU_ITEMS = 'menu_items/GET_ALL_MENU_ITEMS'

//****************************************************************************************************


// Action Creators:
export const getAllMenuItemsAC = (menuItems) => ({
  type: GET_ALL_MENU_ITEMS,
  payload: menuItems,
})


//****************************************************************************************************

// Thunks
// get all menu items thunk
export const getAllMenuItemsThunk = () => async (dispatch) => {
  const res = await fetch('/api/menu_items/');
  if (res.ok) {
    const menuItems = await res.json()
    console.log('this is menuitems thunkkkkk', menuItems)
    dispatch(getAllMenuItemsAC(menuItems.menu_items))
    return menuItems
  }
}


//****************************************************************************************************

// MenuItems Reducer
const initialState = {}
const menuItemsReducer = (state = initialState, action) => {
  let newState = {...state}
  switch (action.type) {
    case GET_ALL_MENU_ITEMS:
      console.log('this is menu items action', action)
      action.payload.forEach(menuitem => {
        newState[menuitem.id] = menuitem
      })
      console.log('this is menu action new state', newState)
      return newState
    default:
      return state
  }
}


export default menuItemsReducer
