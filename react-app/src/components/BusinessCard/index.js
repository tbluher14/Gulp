import { NavLink, useHistory } from 'react-router-dom'
import { getAllUsersThunk } from '../../store/users';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import './BusinessCard.css';

const BusinessCard = ({ business }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  const reviews = useSelector(state => (state.reviews))


  console.log("THIS IS BUSINESS REVIEWS" , reviews)

  // const averageReview = (businessReviewsArray) => {
  //   let total = 0
  //   for (let i = 0; i<businessReviewsArray.length; i++){
  //     total += businessReviewsArray[i].rating
  //   }
  //   return (total / businessReviewsArray.length).toFixed(2)
  // }
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
              <div className='business-card-rating'>Rating </div>
              <div className='business-card-address'>{business?.address}</div>
              <div className='business-card-hours'>Hours: {business?.open} - {business?.close}</div>
              <div className='business-card-description'>DESCRIPTION: {business?.description}</div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}

export default BusinessCard;
