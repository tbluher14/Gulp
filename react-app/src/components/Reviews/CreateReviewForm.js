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
  console.log(businessId)
  const business = useSelector(state => (state.business))
  const businessArr = Object.values(business)
  const currentBusiness = businessArr.filter(bus => bus.id == businessId.businessId)

  const user = useSelector(state => (state.session.user))

  const [review, setReview] = useState('')
  const [rating, setRating] = useState('')
  const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(getAllBusinessesThunk())
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      user_id: user.id,
      business_id: Number(businessId.businessId),
      review: review,
      rating: rating,
    }

    let errors = [];

    if (review.length > 255 || review.length < 10) {
      errors.push( "Review must be between 10 to 255 Characters!" );
    }

    setErrors(errors)

    if (review.length <= 255 && review.length >= 10) {
      const res = await dispatch(
        createReviewThunk(data))
        // .then(() =>
        // dispatch(getAllReviewsThunk()))
      history.push(`/businesses/${businessId.businessId}`)
    }
  }

  return (
    <div className='create_review_page_container'>
      <h2 className='create_review_header'>Create Review for {currentBusiness[0]?.name} </h2>
      <form onSubmit={handleSubmit} className="create_review_form_container">
        <div className="create-review-container">
          <div className="create-review-input-container">
            <div className="createReviewError">
              {(errors).map((error, i) => (
                <div className="errorMessageContainer" key={i}>
                  <i class="fa-solid fa-exclamation exclamation-point"></i>
                  <div className="errorMessage">{error}</div>
                </div>
              ))}
            </div>
            <div className="create-review-input-container">
              <input className="create-business-input"
                type="number"
                min="1"
                max="5"
                placeholder="Rating"
                onChange={(e) => setRating(e.target.value)}
                required
              />
              <input className="create-review-input"
                type="text"
                placeholder='Review Message'
                onChange={(e) => setReview(e.target.value)}
                required
              />
          </div>
          <div className="create-business-input-container">
          </div>
          <button name="submit" type="submit" className="submit_review_button">
            Create Review
          </button>
        </div>

      </div>
    </form>
    </div>
  )
}





export default ReviewForm;
