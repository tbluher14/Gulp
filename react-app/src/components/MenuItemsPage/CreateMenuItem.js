import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createMenuItemThunk, getAllMenuItemsThunk } from "../../store/menuItem";
import './CreateMenuItem.css'


const MenuItemCreateForm = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const businessId = useParams()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image_url, setImageUrl] = useState('')
    const [errors, setErrors] = useState([])
    const [submitted, setSubmitted] = useState(false);
    const user = useSelector((state) => state.session.user);

    const decimalPrice = parseFloat(price).toFixed(2)
    const imageRegX = /\.(jpeg|jpg|png|svg)$/


    const imageLogic = (image_url) => {
        if (image_url) {
            return image_url
        }
        else {
            return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
        }
    }


    useEffect(() => {
        let errors = []
        if (!user) {
            errors.push("User must be logged in")
            setErrors(errors)
        }
        else {

            if (name.length < 5 || name.length > 25) {
                errors.push("item name: must be between 5 and 25 characters.")
            }
            if (price !== decimalPrice) {
                errors.push("item price: must be a valid price ( 0.00 ).")
            }
            if (image_url.length < 1 || !image_url.split('?')[0].match(imageRegX)) {
                errors.push("image url: must be a valid type: jpg, jpeg, png, or svg.");
            }
            setErrors(errors)
        }
    }, [price, name, image_url,user]);



    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)

        if (errors.length) return
        const data = {
            name: name,
            price: price,
            image_url: imageLogic(image_url),
            business_id: Number(businessId.businessId)
        }

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
                            <i className="fa-solid fa-exclamation exclamation-point"></i>
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
                        onChange={(e) => setName(e.target.value)}
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
                        onChange={(e) => setPrice(e.target.value)}
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
                        onChange={(e) => setImageUrl(e.target.value)}

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
