import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllMenuItemsThunk } from "../../store/menuItem";
import MenuItemCard from "../MenuItemCard";

const MenuItemsPage = () => {
  const dispatch = useDispatch()
  const businessId = useParams()

  const menuItems = useSelector( (state) => state.menuItems)
  const menuItemsArr = Object.values(menuItems)
  const specific_menu = menuItemsArr.filter(menuItem => menuItem?.business_id == businessId.businessId)
  const specific_menuArr= Object.values(specific_menu)


  useEffect(() => {
    dispatch(getAllMenuItemsThunk())
  }, [])

  return (
    <div>
      {specific_menuArr.map(menuItems => (
                    <MenuItemCard menuItems={menuItems}></MenuItemCard>
                  ))}
    </div>
  );
}

export default MenuItemsPage;
