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
    const [submitted, setSubmitted] = useState(false);

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
        <div className='form-outer-container'>
            <form onSubmit={handleSubmit} className="form-container">

                <div className='create_review_header'>Add An Item To Your Menu:</div>

                <div className="createReviewError">
                    {submitted && (errors).map((error, i) => (
                        <div className="errorMessageContainer" key={i}>
                        <i class="fa-solid fa-exclamation exclamation-point"></i>
                        <div className="errorMessage">{error}</div>
                        </div>
                    ))}
                </div>

                <div>
                    <label className='form-field-labels'>Item Name:</label>
                    <input className="form-field"
                        type="text"
                        value={name}
                        placeholder
                        onChange={(e)=> setName(e.target.value)}
                        required
                    ></input>
                </div>

                <div>
                    <label className='form-field-labels'>
                        Item Price ($.$$):
                    </label>
                    <input className="form-field"
                        type="text"
                        value={price}
                        onChange={(e)=> setPrice(e.target.value)}
                        required
                    ></input>
                </div>

                <div>
                    <label className='form-field-labels'>
                        Image URL:
                    </label>
                    <input className="form-field"
                        type="text"
                        value={image_url}
                        onChange={(e)=> setImageUrl(e.target.value)}

                    ></input>
                </div>

                <button name="submit" type="submit" className="submit_review_button">
                    Add Menu Item
                </button>

            </form>
        </div>

    )

}

export default MenuItemCreateForm
