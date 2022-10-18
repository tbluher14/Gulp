import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editBusinessThunk, getAllBusinessesThunk } from "../../store/business";
import "./EditBusinessForm.css"

function BusinessEditForm() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const businesses = useSelector(state => (state.business))
  const history = useHistory();
  const { businessId } = useParams();

  const business = businesses[businessId];
  // console.log("this is businessID in react", businessId)
  // console.log("this is business in react", business)

  const [name, setName] = useState(business?.name);
  const [address, setAddress] = useState(business?.address);
  const [city, setCity] = useState(business?.city);
  const [state, setState] = useState(business?.state);
  const [country, setCountry] = useState(business?.country);
  const [zipCode, setZipCode] = useState(business?.zipCode);
  const [website, setWebsite] = useState(business?.website);
  const [phone, setPhone] = useState(business?.phone);
  const [description, setDescription] = useState(business?.description);
  const [open, setOpen] = useState(business?.open)
  const [close, setClose] = useState(business?.close)
  const [image, setImage] = useState(business?.image)

  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);


  // useEffect(() => {
  //   dispatch(getAllBusinessesThunk())
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      owner_id: user.id,
      name: name,
      address: address,
      city: city,
      state: state,
      country: country,
      zipCode: zipCode,
      website: website,
      open: open,
      close: close,
      image: image,
      phone: phone,
      description: description,
    };

    // console.log('THIS IS EDIT BIZ FORM DATA', data)
    // console.log('THIS IS BUSINESS ID', businessId)

    let errors = []

    if (!user){
      errors.push("User must be logged in")
      setErrors(errors)
    }
    else {
    // if (!isImage(image)) {
    //   errors.push( "Must be a valid image: jpg, jpeg, png, webp, avif, gif, svg " )
    // }

    if (name.length < 2 || name.length > 255) {
      errors.push( "Please Enter A Valid Business Name" )
    }

    if (address.length < 2 || address.length > 255) {
      errors.push( "Please Enter A Valid Street Address" )
    }

    if (city.length < 2 || city.length > 255) {
      errors.push( "Please Enter A Valid City" )
    }

    if (state.length < 2 || state.length > 255) {
      errors.push( " Please enter a Valid State" )
    }

    if (open < 0 || open > 23){
      errors.push('Please Enter a Valid Opening time')
    }
    if (close < 0 || close > 23){
      errors.push('Please Enter Valid Closing time')
    }

    if (country.length < 2 || country.length > 255) {
      errors.push( "Please Enter A Valid Country" )
    }
    if (zipCode.length < 5 || zipCode.length > 5) {
      errors.push( "Please Enter A Valid Zip Code" )
    }
    if (description.length < 5 || description.length > 255) {
      errors.push( "Please Enter A Valid Description" )
    }
    if (phone.length !== 10) {
      errors.push( "Phone Number Must Be 10 Characters" )
    }
    if (website.length < 2){
      errors.push("Please Enter A Valid Business Website")
    }
    if (!image.includes("https")){
      errors.push("Please Enter A Valid Business Image URL")
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
    && (website.length > 2)
    && (image.includes('https'))
    ){
    return dispatch(editBusinessThunk(data, businessId))
    // .then(dispatch(getAllBusinessesThunk()))
    .then(history.push(`/businesses/${businessId}`));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-business-container">
        <h4 className="edit_form_requirements">Please fill out all of the following fields:</h4>
        <ul className="edit_business_errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
          </ul>
      <div className="edit-business-container">
        <div className="edit-business-input-container">

          <div className="edit-business-input-container">
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
              placeholder="Business Phone"
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
            Edit Business
          </button>
        </div>

      </div>
    </form>
  );
}

export default BusinessEditForm;
