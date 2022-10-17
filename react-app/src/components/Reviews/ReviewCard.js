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
    // <div className='review-card-container'>

    //   <div>
    //     {review?.user_id === sessionUser?.id && (
    //     <button id='edit_my_review' onClick={() => history.push(`/reviews/${review.id}/${businessId}/edit`)}>Edit Review</button>
    //     )}

    //     {review?.user_id === sessionUser?.id && (
    //     <button id='delete_my_review' onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete Review</button>
    //     )}

    //     <h4>Rating</h4>

    //     <div>
    //       {review.rating}
    //     </div>

    //     Review:{review.review}
    //   </div>

    // </div>

    <div className='review-card-container'>

      <div className='review-card-upper'>
        <img className='review-card-user-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'></img>
        <div className='review-card-upper-right-container'>
          <div>Name</div>
          <div>Location</div>
        </div>
      </div>

      <div className='review-card-middle'>RATING STARS/DATE</div>

      <div className='review-card-bottom'>REVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEWREVIEW</div>



      <div>
        {review?.user_id === sessionUser?.id && (
        <button id='edit_my_review' onClick={() => history.push(`/reviews/${review.id}/${businessId}/edit`)}>Edit Review</button>
        )}

        {review?.user_id === sessionUser?.id && (
        <button id='delete_my_review' onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete Review</button>
        )}
      </div>

    </div>
  );
}

export default ReviewCard;
