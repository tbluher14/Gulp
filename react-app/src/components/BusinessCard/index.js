import { NavLink, useHistory } from 'react-router-dom'
import { getAllUsersThunk } from '../../store/users';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import './BusinessCard.css';

const BusinessCard = ({ business }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  return (
    <div className='business-card'>
      <div onClick={() => history.push(`/businesses/${business?.id}`)}>
        <div className='business-card-container'>
          <div className='business-card-inner-container'>

            <div className='business-card-inner-container-left'>
              <img className='business-card-picture' src='https://loving-newyork.com/wp-content/uploads/2021/08/Manhatta-Restaurant-NYC-190909102021004-1.jpeg'></img>
            </div>

            <div className='business-card-inner-container-right'>
              <div className='business-card-header'>{business?.name}</div>
              <div className='business-card-rating'>Rating</div>
              <div className='business-card-address'>{business?.address}</div>
              <div className='business-card-hours'>Open until Midnight</div>
              <div className='business-card-description'>DESCRIPTION: {business?.description}</div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}

export default BusinessCard;
