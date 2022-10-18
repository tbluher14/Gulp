import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBusinessThunk } from "../../store/business";

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


  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])

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

    
    return dispatch(createBusinessThunk(data))
    .then( async (res) => {
      setIsSubmitted(true)
      setErrors([])
    })
    .catch(async (res) => {
      console.log("THIS IS RESSSSS", res)
      const result = res.json()
      console.log("THIS IS DATA IN CREATE", result)
      if (result && result.errors){
        setIsSubmitted(false)
        setErrors(Object.values(data.errors))
      }
    })
  };

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
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={address}
              placeholder="address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={city}
              placeholder="city"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={state}
              placeholder="state"
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={country}
              placeholder="country"
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={zipCode}
              placeholder="zipCode"
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={website}
              placeholder="Website"
              onChange={(e) => setWebsite(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={open}
              placeholder="Open"
              onChange={(e) => setOpen(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={close}
              placeholder="Close"
              onChange={(e) => setClose(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={phone}
              placeholder="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="create-business-input-container">
            <input className="create-business-input"
              type="text"
              value={image}
              placeholder="image"
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
