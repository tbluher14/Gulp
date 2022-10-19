import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createMenuItemThunk, getAllMenuItemsThunk } from "../../store/menuItem";
import './CreateMenuItem.css'


const MenuItemCreateForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const businessId = useParams()
    console.log(businessId)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])

    const imageLogic = (image_url) => {
        if (image_url){
            return image_url
        }
        else{
            return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name: name,
            price: price,
            image_url: imageLogic(image_url),
            business_id: Number(businessId.businessId)
        }

        const errors = []
        // for (let i = 0; i<price.length; i++){
        //     if (!price[i].includes("1" || "2" || "3" || "4"|| "5"|| "6"|| "7"|| "8" || "9" || "0" || ".")){
        //         errors.push("Please enter a valid decimal price")
        //         return setErrors(errors)
        //     }
        // }
        setErrors(errors)

        // if (price.includes("1" || "2" || "3" || "4"|| "5"|| "6"|| "7"|| "8" || "9" || "0" || "."))
        {
            const res = await dispatch(createMenuItemThunk(data))
            .then(dispatch(getAllMenuItemsThunk()))
            .then((res) => history.push(`/businesses/menu/${businessId.businessId}`))
        }

    }
    return (

        <form onSubmit={handleSubmit} className='create_menu_item_container'>
            <h2>Add An Item To Your Menu:</h2>
            <label className="create_menu_item_label">Item Name:</label>
            <input
                type="text"
                value={name}
                placeholder
                onChange={(e)=> setName(e.target.value)}
                required
            ></input>
            <label className="create_menu_item_label">
                Item Price ($.$$):
            </label>
            <input
                type="text"
                value={price}

                onChange={(e)=> setPrice(e.target.value)}
                required
            ></input>
            <label className="create_menu_item_label">
                Image URL:
            </label>
            <input
                type="text"
                value={image_url}
                
                onChange={(e)=> setImageUrl(e.target.value)}

            ></input>

            <button name="submit" type="submit" className="menu_item_submit">
                Add Menu Item
            </button>
            <div>
                {errors.map(error => error)}
            </div>
        </form>

    )

}

export default MenuItemCreateForm
