import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllMenuItemsThunk } from "../../store/menuItem";
import MenuItemCard from "../MenuItemCard";
import './MenuItemsPage.css'

const MenuItemsPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const businessId = useParams()
  const business = useSelector(state => (state.business))
  const currentBusiness = business[businessId.businessId]
  const user = useSelector((state) => state.session.user);
  const menuItems = useSelector( (state) => state.menuItems)
  const menuItemsArr = Object.values(menuItems)
  const specific_menu = menuItemsArr.filter(menuItem => menuItem?.business_id == businessId.businessId)
  const specific_menuArr= Object.values(specific_menu)
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllMenuItemsThunk()).then(() => setIsLoaded(true))
  }, [])

  if (!isLoaded) return null

  return isLoaded && (
    <div className="menuitemspage-container" id="menuitemspage-container">
      {}
      {user?.id == currentBusiness?.owner_id && (
      <button
      className='menu-items-page-button'
      onClick={() => history.push(`/businesses/menu/${businessId.businessId}/add`)}
      >Add Menu Item
      </button>
      )}
      {specific_menuArr.map(menuItems => (
        <MenuItemCard menuItems={menuItems}></MenuItemCard>
      ))}
    </div>
  );
}

export default MenuItemsPage;
