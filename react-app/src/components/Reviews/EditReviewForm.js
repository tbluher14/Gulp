import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { editReviewThunk } from '../../store/review';
import { getAllReviewsThunk } from '../../store/review';
import './CreateReview.css'


const EditReviewForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const businessId = useParams();
  const reviewId = useParams()
  const business = useSelector(state => (state.business))
  const businessArr = Object.values(business)
  const currentBusiness = businessArr.filter(bus => bus.id == businessId.businessId)
  const user = useSelector(state => (state.session.user))
  const reviews = useSelector(state => (state.review))

  const currentReview = reviews[reviewId.reviewId]


  const [review, setReview] = useState(currentReview?.review)
  const [rating, setRating] = useState(currentReview?.rating)
  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect((e) => {
    dispatch(getAllReviewsThunk()).then(() => setIsLoaded(true))
  }, [])


  useEffect(() => {
    let errors = [];

    // if(Number.isInteger(rating)) {
    //   errors.push('Rating must be a number')
    // }

    if (rating && (rating < 1 || rating > 5)) {
      errors.push("rating: must be between 1 and 5.");
    }
    if (review && (review.length > 255 || review.length < 10)) {
      errors.push("review: must be between 10 to 255 Characters.");
    }

    setErrors(errors)
  }, [review, rating])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true)

    const data = {
      user_id: user.id,
      business_id: businessId.businessId,
      review: review,
      rating: rating,
    }


    if (review.length <= 255 && review.length >= 10) {
      const res = await dispatch(
        editReviewThunk(data, reviewId.reviewId))
      // .then(() => dispatch(getAllReviewsThunk())).then(() => history.push(`/businesses/${businessId.businessId}`))
      history.push(`/businesses/${businessId.businessId}`)
    }

  }


  return isLoaded && (
    <div className='form-outer-container'>
      <form onSubmit={handleSubmit} className="form-container">
      <div className='create_review_header'>Edit Review for {currentBusiness[0]?.name}</div>

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
          <input className="form-field"
            type="number"
            // min="1"
            // max="5"
            value={rating}
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div>
          <label className='form-field-labels'>Review</label>
          <input className="form-field"
            type="text"
            value={review}
            placeholder='Review Message'
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>

        <button name="submit" type="submit" className="submit_review_button">
          Edit Review
        </button>

      </form>
    </div>
  )
}

export default EditReviewForm;
