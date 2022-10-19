import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createMenuItemThunk } from "../../store/menuItem";


const MenuItemCreateForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const businessId = useParams()
    console.log(businessId)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image_url, setImageUrl] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("BUSINESS ID", businessId.businessId)
        const data = {
            name: name,
            price: price,
            image_url: image_url,
            business_id: Number(businessId.businessId)
        }
        console.log("THIS IS DATS IN CREATE MENU ITEM", data)

       const res = await dispatch(createMenuItemThunk(data)).then((res) => history.push(`/businesses/menu/${businessId.businessId}`))
    }
    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={name}
                placeholder={"Item Name"}
                onChange={(e)=> setName(e.target.value)}
                required
            ></input>
            <input
                type="text"
                value={price}
                placeholder={"Item Price"}
                onChange={(e)=> setPrice(e.target.value)}
                required
            ></input>
            <input
                type="text"
                value={image_url}
                placeholder={"Item Image URL"}
                onChange={(e)=> setImageUrl(e.target.value)}
                required
            ></input>

            <button name="submit" type="submit">
                Add Menu Item
            </button>
        </form>

    )

}

export default MenuItemCreateForm
