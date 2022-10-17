import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import getAllReviewsThunk, { deleteReviewThunk } from '../../store/review';
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)

  const { businessId } = useParams()
  // const reviews = useSelector(state => (state.review))


  const editReview = (e) => {
    e.preventDefault()
    history.push(`/businesses/${businessId}`)
  }


  return (
    <div className='review-card-container'>

      <div className='review-card-upper'>
        <img className='review-card-user-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'></img>
        <div className='review-card-upper-right-container'>
          <div>Name</div>
          <div>Location</div>
        </div>
      </div>

      <div className='review-card-middle'>Rating: {review?.rating}</div>

      <div className='review-card-bottom'>{review?.review}</div>

      <div className='review-card-button-container'>
        {review?.user_id === sessionUser?.id && (
          <button id='review-card-edit-button' onClick={() => history.push(`/reviews/${review.id}/${businessId}/edit`)}>Edit Review</button>
        )}

        {review?.user_id === sessionUser?.id && (
          <button id='review-card-delete-button' onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete Review</button>
        )}
      </div>

    </div>
  );
}

export default ReviewCard;
