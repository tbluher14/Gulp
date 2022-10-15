import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editBusinessThunk } from "../../store/business";

function BusinessEditForm() {

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
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    setErrors([]);

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
    };

    return dispatch(editBusinessThunk(data, 6));

  };

  return (
    <form onSubmit={handleSubmit}>
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
              placeholder="website"
              onChange={(e) => setWebsite(e.target.value)}
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

          <button name="submit" type="submit" className="submitButton">
            Edit Business
          </button>
        </div>

      </div>
    </form>
  );
}

export default BusinessEditForm;
