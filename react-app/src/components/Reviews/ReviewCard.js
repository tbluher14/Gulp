import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import getAllReviewsThunk from '../../store/review';

const ReviewCard = ({ review }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user)

  const { businessId } = useParams()
  // const review = useSelector(state => (state.review))


  const editReview = (e) => {
    e.preventDefault()
    
    history.push(`/businesses/${businessId}`)
  }
  // useEffect(() => {
  //   dispatch(getAllReviewsThunk())
  // }, [])

  console.log('reviewwwwwwwwwwwww', review)

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
