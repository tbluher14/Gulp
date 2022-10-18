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
  const user = useSelector(state => (state.session.user))
  const reviews = useSelector(state => (state.review))

  // console.log('this is businessId', businessId)
  // console.log('this is reviewId', reviewId)

  // console.log('this is reviews', reviews)

  const currentReview = reviews[reviewId.reviewId]

  // console.log('this is currentReview', currentReview)

  const [review, setReview] = useState(currentReview?.review)
  const [rating, setRating] = useState(currentReview?.rating)
  const [errors, setErrors] = useState([])

  useEffect((e) => {
    dispatch(getAllReviewsThunk())
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      user_id: user.id,
      business_id: businessId.businessId,
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
      editReviewThunk(data, reviewId.reviewId))
      // .then(() => dispatch(getAllReviewsThunk())).then(() => history.push(`/businesses/${businessId.businessId}`))
      history.push(`/businesses/${businessId.businessId}`)
    }

  }


  return (
    <form onSubmit={handleSubmit}>
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
        <div className="create-business-input-container">
          <input className="create-business-input"
            type="number"
            min="1"
            max="5"
            value={rating}
            placeholder="Rating"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="create-review-input-container">
          <input className="create-review-input"
            type="text"
            value={review}
            placeholder='Review Message'
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button name="submit" type="submit" className="submitButton">
          Edit Review
        </button>
      </div>

    </div>
  </form>
  )
}

export default EditReviewForm;
