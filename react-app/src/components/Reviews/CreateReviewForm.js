import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { getAllBusinessesThunk } from '../../store/business';
import { createReviewThunk, getAllReviewsThunk } from '../../store/review';

const ReviewForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const businessId = useParams()
  const business = useSelector(state => (state.business))
  const businessArr = Object.values(business)
  const currentBusiness = businessArr.filter(bus => bus.id == businessId.businessId)

  const user = useSelector(state => (state.session.user))

  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')
  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getAllBusinessesThunk())
  }, [])

  useEffect(() => {
    let errors = [];

    // if(Number.isInteger(rating)) {
    //   errors.push('Rating must be a number')
    // }

    if (rating < 1 || rating > 5) {
      errors.push("rating: must be between 1 and 5.");
    }
    if (review.length > 255 || review.length < 10) {
      errors.push("review: must be between 10 and 255 Characters.");
    }

    setErrors(errors)
  }, [review, rating])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)

    if (errors.length > 0) return

    const data = {
      user_id: user.id,
      business_id: Number(businessId.businessId),
      review: review,
      rating: rating,
    }

    if (review.length <= 255 && review.length >= 10) {
      const res = await dispatch(
        createReviewThunk(data))
      history.push(`/businesses/${businessId.businessId}`)
    }
  }

  return (
    <div className='form-outer-container'>
      <form onSubmit={handleSubmit} className="form-container">
      <div className='create_review_header'>Create Review for {currentBusiness[0]?.name} </div>

        <div className="createReviewError">
          {submitted && (errors).map((error, i) => (
            <div className="errorMessageContainer" key={i}>
              <i className="fa-solid fa-exclamation exclamation-point"></i>
              <div className="errorMessage">{error}</div>
            </div>
          ))}
        </div>

        <div>
          <label className='form-field-labels'>Rating</label>
          <input
            type="number"
            className="form-field"
            // min="1"
            // max="5"
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div>
        <label className='form-field-labels'>Review</label>
          <input
            type="text"
            className="form-field"
            placeholder='Review Message'
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>

        <button name="submit" type="submit" className="submit_review_button">
          Create Review
        </button>

      </form>
    </div>
  )
}





export default ReviewForm;
