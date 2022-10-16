import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ReviewCard = () => {
  const history = useHistory()
  const sessionUser = useSelector((state) => state.session.user)
  const { businessId } = useParams()

  useEffect(() => {
    dispatch(getAllReviewsThunk())
  })

  return (
    <div className='review-card'>
      <div onClick={() => history.push(`/businesses/${business?.id}`)}>
            <div>
              <div>{name}</div>
              <div>Rating</div>
            </div>

      </div>

    </div>
  );
}

export default ReviewCard;
