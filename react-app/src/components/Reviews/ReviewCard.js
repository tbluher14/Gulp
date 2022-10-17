import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import getAllReviewsThunk, { deleteReviewThunk } from '../../store/review';

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

  const deleteReview = (e) => {
    // e.preventDefault()
    dispatch(deleteReviewThunk(review.id))
    dispatch(getAllReviewsThunk())
    history.push(`/businesses/${businessId}`)
  }



  return (
    <div className='review-card'>
      <div>
          <div>
            <div></div>
            {review?.user_id == sessionUser?.id && (
            <button
            id='edit_my_review'
            onClick={() => history.push(`/reviews/${review.id}/edit`)}
            >Edit My Review</button>
            )}
            {review?.user_id == sessionUser?.id && (
            <button
            id='delete_my_review'
            onClick={() => deleteReview()}
            >Delete My Review</button>
            )}
            <h4>Rating</h4>
            <div>
              {review.rating}
            </div>
            Review:{review.review}
          </div>

      </div>

    </div>
  );
}

export default ReviewCard;
