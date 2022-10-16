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


  // useEffect(() => {
  //   dispatch(getAllReviewsThunk())
  // }, [])

  console.log('reviewwwwwwwwwwwww', review)

  return (
    <div className='review-card'>
      <div>
            <div>
              {/* <div>{name}</div> */}
              <div>Rating</div>
              <div>{review.rating}</div>
            </div>

      </div>

    </div>
  );
}

export default ReviewCard;
