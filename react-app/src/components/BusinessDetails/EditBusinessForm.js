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
  const [submitted, setSubmitted] = useState(false);

  const imageRegX = /\.(jpeg|jpg|png|svg|gif)$/
  const webRegX = /\.(com|net|org|co|biz|info)$/
  const zipRegX = /^\d{5}$/

  useEffect(() => {
    let errors = []
    if (!user) {
      errors.push("User must be logged in")
      setErrors(errors)
    }
    else {
      // if (!isImage(image)) {
      //   errors.push( "Must be a valid image: jpg, jpeg, png, webp, avif, gif, svg " )
      // }
      if (image.length < 1 || !image.split('?')[0].match(imageRegX)) {
        errors.push("Provide a valid image URL");
      }

      if (website.length < 1 || !website.match(webRegX)) {
        errors.push("Provide a website URL");
      }

      if (name.length < 5 || name.length > 255) {
        errors.push("Name must be between 5 to 255 characters.")
      }

      if (address.length < 5 || address.length > 255) {
        errors.push("Address must be between 5 to 255 characters.")
      }

      if (city.length < 5 || city.length > 255) {
        errors.push("City must be between 5 to 255 characters.")
      }

      if (state.length < 5 || state.length > 255) {
        errors.push("State must be between 5 to 255 characters.")
      }

      // if (open < 0 || open > 23) {
      //   errors.push('Please enter valid opening time')
      // }
      // if (close < 0 || close > 23) {
      //   errors.push('Please enter valid closing time')
      // }

      if (country.length < 1 || country.length > 255) {
        errors.push("Country must be between 1 and 255 characters.")
      }
      if (!zipCode.match(zipRegX)) {
        errors.push("Zipcode must be 5 characters")
      }
      if (description.length < 5 || description.length > 255) {
        errors.push("Description must be between 5 to 255 characters.")
      }
      if (phone.length !== 10) {
        errors.push("Phone must be 10 characters")
      }
      setErrors(errors)
    }
  }, [name, address, city, state, country, zipCode, website, phone, open, close, description, image, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)

    if (errors.length) return
    
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
    return dispatch(editBusinessThunk(data, businessId))
      // .then(dispatch(getAllBusinessesThunk()))
      .then(history.push(`/businesses/${businessId}`));
  };

  return (
    <form onSubmit={handleSubmit} className="edit-business-container">
      <h4 className="edit_form_requirements">Please fill out all of the following fields:</h4>
      <div className="edit_business_errors">
        {submitted && errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </div>
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
