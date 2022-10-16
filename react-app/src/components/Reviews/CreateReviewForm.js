import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { createReviewThunk, getAllReviewsThunk } from '../../store/review';




const ReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const businessId = useParams()
    console.log("this is business id in review react", businessId)
    const business = useSelector(state => (state.business))
    const user = useSelector(state => (state.session.user))

    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')
    const [errors, setErrors] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            user_id: user.id,
            business_id: businessId.businessId,
            review: review,
            rating: rating,
        }
        const res = await dispatch(createReviewThunk(data))
        dispatch(getAllReviewsThunk())
        history.push(`/businesses/${businessId.businessId}`)
    }
    
// changes for git


    return (
        <form onSubmit={handleSubmit}>
        <div className="create-review-container">
          <div className="create-review-input-container">
            <div className="create-review-input-container">
              <input className="create-review-input"
                type="text"
                placeholder='review'
                onChange={(e) => setReview(e.target.value)}
                required
              />
            </div>
            <div className="create-business-input-container">
              <input className="create-business-input"
                type="text"
                placeholder="rating"
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <button name="submit" type="submit" className="submitButton">
              Create Review
            </button>
          </div>

        </div>
      </form>
    )
}





export default ReviewForm;
