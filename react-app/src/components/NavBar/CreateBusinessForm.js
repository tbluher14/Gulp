import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createBusinessThunk } from "../../store/business";
import "../../index.css";
import './CreateBusinessForm.css'

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
  const [ampmopen, setAmpmopen] = useState('')
  const [ampmclose, setAmpmclose] = useState('')

  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // console.log('ampmopen', ampmopen)
  // console.log('ampmclose', ampmclose)
  console.log('this is open', open)
  console.log('this is close', close)


  const imageRegX = /\.(jpeg|jpg|png|svg)$/
  const webRegX = /\.(com|net|org|co|biz|info|gov)$/
  const timeRegX = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/
  const phoneRegX = /^\d{10}$/
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



      if (name.length < 5 || name.length > 255) {
        errors.push("Business Name must be between 5 and 255 characters.")
      }

      if (address.length < 5 || address.length > 255) {
        errors.push("Business Address must be between 5 and 255 characters.")
      }

      if (city.length < 3 || city.length > 255) {
        errors.push("City must be between 3 and 255 characters.")
      }

      if (state.length < 3  || state.length > 255) {
        errors.push("State must be between 4 and 255 characters.")
      }
      if (country.length < 3 || country.length > 255) {
        errors.push("Country must be between 3 and 255 characters.")
      }
      if (website.length < 1 || !website.match(webRegX)) {
        errors.push("Business Website must be a valid URL");
      }
      if (!zipCode.match(zipRegX)) {
        errors.push("Zipcode must be 5 numbers")
      }
      if (open < 0 || open > 13 || !open.match(timeRegX)) {
        errors.push('Please select an opening time')
      }
      if (close < 0 || close > 13 || !close.match(timeRegX)) {
        errors.push('Please select a closing time')
      }
      if (phone.length !== 10 || !phone.match(phoneRegX)) {
        errors.push("Business Phone must be 10 sequential numbers (ex: 1234567890)")
      }
      if (description.length < 5 || description.length > 255) {
        errors.push("Description must be between 5 and 255 characters.")
      }
      if (image.length < 1 || !image.split('?')[0].match(imageRegX)) {
        errors.push("Image must be a valid type: jpg, jpeg, png, or svg");
      }
      setErrors(errors)
    }
  }, [name, address, city, state, country, zipCode, website, phone, open, close, description, image, user]);



  const handleSubmit = async (e) => {
    e.preventDefault()
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
      phone: phone,
      description: description,
      open: open,
      close: close,
      am_pm_open: ampmopen,
      am_pm_close: ampmclose,
      image: image
    };

    return dispatch(createBusinessThunk(data)).then((res) => history.push(`/businesses/${res.id}`)
      // .catch(
      //   async (res) => {
      //     const data = await res.json()
      //     if (data && data.errors) setErrors(data.errors)
      //   }
      // )
    )
  }

  return (
    <div className="form-outer-container">
      <form onSubmit={handleSubmit}>
        <div className="create-business-form-requirements">Please fill out all of the following fields:</div>
        <div className="form-container">
          <div className="input-container">
            <div className="create_errors">
              {submitted && (errors).map((error, i) => (
                <div className="errorMessageContainer" key={i}>
                  <i class="fa-solid fa-exclamation exclamation-point"></i>
                  <div className="errorMessage">{error}</div>
                </div>
              ))}
            </div>
            <div className="input-container">
            <label htmlFor='Business Name' className='form-field-labels'>Business Name</label>
              <input className="form-field"
                name="Business Name"
                type="text"
                value={name}
                placeholder="Business Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='Business Address' className='form-field-labels'>Business Address</label>
              <input className="form-field"
                name="Business Address"
                type="text"
                value={address}
                placeholder="Business Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='City' className='form-field-labels'>City</label>
              <input className="form-field"
                name="City"
                type="text"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='State' className='form-field-labels'>State</label>
              <input className="form-field"
                name="State"
                type="text"
                value={state}
                placeholder="State"
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='Country' className='form-field-labels'>Country</label>
              <input className="form-field"
                name='Country'
                type="text"
                value={country}
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='Zip Code' className='form-field-labels'>Zip Code</label>
              <input className="form-field"
                name='Zip Code'
                type="text"
                value={zipCode}
                placeholder="Zip Code"
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='Business Website' className='form-field-labels'>Business Website</label>
              <input className="form-field"
                name='Business Website'
                type="text"
                value={website}
                placeholder="Business Website"
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
            <div className="input-container">

            <label htmlFor='Open Time & Close Time' className='form-field-labels'>Open Time & Close Time</label>
              <select className="select-form-field-time" value={open} onChange={(e) => setOpen(e.target.value)} placeholder="time" required>
                <option value="" disabled selected>Open Time</option>
                <option value='1:00'>1:00</option>
                <option value='2:00'>2:00</option>
                <option value='3:00'>3:00</option>
                <option value='4:00'>4:00</option>
                <option value='5:00'>5:00</option>
                <option value='6:00'>6:00</option>
                <option value='7:00'>7:00</option>
                <option value='8:00'>8:00</option>
                <option value='9:00'>9:00</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
              </select>

              <select className="select-form-field-time" value={ampmopen} onChange={(e) => setAmpmopen(e.target.value)} required>
                <option value='' disabled selected>AM | PM</option>
                <option value='AM'>AM</option>
                <option value='PM'>PM</option>
              </select>

            </div>
            <div className="input-container">

              <select className="select-form-field-time" value={close} onChange={(e) => setClose(e.target.value)} required>
                <option value="" disabled selected>Close Time</option>
                <option value='1:00'>1:00</option>
                <option value='2:00'>2:00</option>
                <option value='3:00'>3:00</option>
                <option value='4:00'>4:00</option>
                <option value='5:00'>5:00</option>
                <option value='6:00'>6:00</option>
                <option value='7:00'>7:00</option>
                <option value='8:00'>8:00</option>
                <option value='9:00'>9:00</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
              </select>

              <select className="select-form-field-time" value={ampmclose} onChange={(e) => setAmpmclose(e.target.value)} required>
                <option value='' disabled selected>AM | PM</option>
                <option value='AM'>AM</option>
                <option value='PM'>PM</option>
              </select>

            </div>
            <div className="input-container">
            <label htmlFor='Business Phone' className='form-field-labels'>Business Phone</label>
              <input className="form-field"
                name='Business Phone'
                type="text"
                value={phone}
                placeholder="Business Phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='Business Description' className='form-field-labels'>Business Description</label>
              <input className="form-field"
                name='Business Description'
                type="text"
                value={description}
                placeholder="Business Description"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
            <label htmlFor='Image' className='form-field-labels'>Image</label>
              <input className="form-field"
                name='Image'
                type="text"
                value={image}
                placeholder="Image"
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>

            <div className="create-business-button-container">
              <button name="submit" type="submit" className="form-button-create-business">
                Create Business
              </button>
            </div>


          </div>
        </div>
      </form>
    </div>
  );
}

export default BusinessCreateForm;
