import { NavLink, useHistory } from 'react-router-dom'
import { getAllUsersThunk } from '../../store/users';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import './BusinessCard.css';
import { getAllReviewsThunk } from '../../store/review';


const BusinessCard = ({ business }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  // Reviews Logic
  const reviews = useSelector(state => (state.review))
  const businessReviews = Object.values(reviews)
  const businessReviewsArray = businessReviews.filter(review => review?.business_id === business?.id)

  const averageReview = (businessReviewsArray) => {
      let total = 0
      for (let i = 0; i<businessReviewsArray.length; i++){
        total += businessReviewsArray[i].rating
      }
      return (total / businessReviewsArray.length).toFixed(2)
    }

  useEffect((e) => {
    dispatch(getAllReviewsThunk())
  }, [])


 // new
  return (
    <div className='business-card'>
      <div onClick={() => history.push(`/businesses/${business?.id}`)}>
        <div className='business-card-container'>
          <div className='business-card-inner-container'>

            <div className='business-card-inner-container-left'>
              <img src={business?.image} alt='business-card' className='business-card-picture'></img>
            </div>

            <div className='business-card-inner-container-right'>
              <div className='business-card-header'>{business?.name}</div>
              <div className='business-card-rating'><i class="fa-solid fa-star"></i> {businessReviewsArray.length ? averageReview(businessReviewsArray) : "No Reviews Yet!" }</div>
              <div className='business-card-address'>{business?.address}</div>
              <div className='business-card-hours'>Hours: {business?.open} {business?.ampmopen}- {business?.close}{business?.ampmclose}</div>
              <div className='business-card-description'>{business?.description}</div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}

export default BusinessCard;
