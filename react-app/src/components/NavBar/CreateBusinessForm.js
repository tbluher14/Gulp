import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBusinessThunk } from "../../store/business";
import "./CreateBusinessForm.css";

function BusinessCreateForm() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const history = useHistory();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState('')
  const [close, setClose] = useState('')
  const [description, setDescription] = useState("");
  const [image, setImage] = useState('')

  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // function isImage(image) {
  //   return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image)
  // }


const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      owner_id: user.id,
      name: name,
      address: address,
      city: city,
      state: state,
      country: country,
      zipCode: zipCode,
      open: open,
      close: close,
      website: website,
      phone: phone,
      description: description,
      image: image
    };

    let errors = []

    if (!user){
      errors.push("User must be logged in")
      setErrors(errors)
    }
    else {
    // if (!isImage(image)) {
    //   errors.push( "Must be a valid image: jpg, jpeg, png, webp, avif, gif, svg " )
    // }

    if (name.length < 5 || name.length > 255) {
      errors.push( "Name must be between 5 to 255 characters." )
    }

    if (address.length < 5 || address.length > 255) {
      errors.push( "Address must be between 5 to 255 characters." )
    }

    if (city.length < 5 || city.length > 255) {
      errors.push( "City must be between 5 to 255 characters." )
    }

    if (state.length < 5 || state.length > 255) {
      errors.push( "State must be between 5 to 255 characters." )
    }

    if (open < 0 || open > 23){
      errors.push('Please enter valid opening time')
    }
    if (close < 0 || close > 23){
      errors.push('Please enter valid closing time')
    }

    if (country.length < 1 || country.length > 255) {
      errors.push( "Country must be between 1 and 255 characters." )
    }
    if (zipCode.length < 5 || zipCode.length > 5) {
      errors.push( "Country must be 5 characters" )
    }
    if (description.length < 5 || description.length > 255) {
      errors.push( "Description must be between 5 to 255 characters." )
    }
    if (phone.length !== 10) {
      errors.push( "Phone must be 10 characters" )
    }
    setErrors(errors)
  }

  if (user
  && (name.length > 5 && name.length<255)
  && (address.length >=5 && address.length <= 255)
  && (city.length >= 5 && city.length <= 255)
  && (state.length >= 5 && state.length <= 255)
  && (open >= 0 && open <= 23)
  && (close >= 0 && close <= 23)
  && (country.length >= 5 && country.length <= 255)
  && (zipCode.length === 5)
  && (description.length >= 5 && description.length <= 255)
  && (phone.length === 10)
  )
  {
    return dispatch(createBusinessThunk(data)).then((res) => history.push(`/businesses/${res.id}`)
    // .catch(
    //   async (res) => {
    //     const data = await res.json()
    //     if (data && data.errors) setErrors(data.errors)
    //   }
    // )
    )
  }
}

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="form_requirements">Please fill out all of the following fields:</h4>
        <ul className="create_errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
          </ul>
      <div className="create-business-container">
        <div className="create-business-input-container">

          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={name}
              placeholder="Business Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={address}
              placeholder="Business Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={city}
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={state}
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={country}
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={zipCode}
              placeholder="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={website}
              placeholder="Business Website"
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={open}
              placeholder="Open Time"
              onChange={(e) => setOpen(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={close}
              placeholder="Close Time"
              onChange={(e) => setClose(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={phone}
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={description}
              placeholder="Business Description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={image}
              placeholder="Image"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>

          <button name="submit" type="submit" className="submitButton">
            Create Business
          </button>
        </div>

      </div>
    </form>
  );
}

export default BusinessCreateForm;
