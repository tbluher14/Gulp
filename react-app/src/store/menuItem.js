// Actions:
const GET_ALL_MENU_ITEMS = 'menu_items/GET_ALL_MENU_ITEMS'
const CREATE_MENU_ITEM = 'menu_items/CREATE_MENU_ITEM'
const DELETE_MENU_ITEM = 'menu_items/DELETE_MENU_ITEM'


//****************************************************************************************************


// Action Creators:
export const getAllMenuItemsAC = (menuItems) => ({
  type: GET_ALL_MENU_ITEMS,
  payload: menuItems,
})

export const createMenuItemAC = (menuItem) => ({
  type: CREATE_MENU_ITEM,
  payload: menuItem,
})

export const deleteMenuItemAC = (menuItem) => ({
  type: DELETE_MENU_ITEM,
  payload: menuItem,
})

//****************************************************************************************************

// Thunks
// get all menu items thunk
export const getAllMenuItemsThunk = () => async (dispatch) => {
  const res = await fetch('/api/menu_items/');
  if (res.ok) {
    const menuItems = await res.json()
    dispatch(getAllMenuItemsAC(menuItems.menu_items))
    return menuItems
  }
}

// Create menu item thunk
export const createMenuItemThunk = (menuItem) => async (dispatch) => {
  const res = await fetch(`/api/menu_items/create_menu_item`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(menuItem)
  })
  if (res.ok) {
    const menuItem = await res.json()
    console.log("MENU ITEM********", menuItem)
    dispatch(createMenuItemAC(menuItem))
    return menuItem
  }
}


// Delete menu item thunk
export const deleteMenuItemThunk = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menu_items/${menuItemId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  if (res.ok) {
    dispatch(deleteMenuItemAC(menuItemId))
    return res
  }
}

//****************************************************************************************************

// MenuItems Reducer
const initialState = {}
const menuItemsReducer = (state = initialState, action) => {
  let newState = { ...state }
  switch (action.type) {
    case GET_ALL_MENU_ITEMS:
      console.log('this is menu items action', action)
      action.payload.forEach(menuitem => {
        newState[menuitem.id] = menuitem
      })
      return newState
    case CREATE_MENU_ITEM:
      newState = { ...state }
      console.log("this is new state", newState)
      return newState
    case DELETE_MENU_ITEM:
      newState = { ...state }
      delete newState[action.payload]
      return newState
    default:
      return state
  }
}


export default menuItemsReducer
