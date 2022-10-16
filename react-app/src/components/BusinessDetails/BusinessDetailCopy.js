import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteBusinessThunk, getAllBusinessesThunk } from '../../store/business';
import { useHistory, useParams } from 'react-router-dom';
import CreateReviewModal from '../Reviews/CreateReviewModal';
import './BusinessDetail.css'


const BusinessesDetailsCopy = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const businessId = useParams()

    const business = useSelector(state => (state.business))
    const user = useSelector((state) => state.session.user);
    const currentBusiness = business[businessId.businessId]


    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
    }, [])

    const removeBusiness = (businessId) => async (e) => {
        e.preventDefault();
        const res = await dispatch(deleteBusinessThunk(businessId))
        history.push('/businesses')
        return res
    }

    const editBusiness = (businessId) => async (e) => {
      e.preventDefault();
      history.push(`/businesses/${businessId}/edit`)
    }

    return (
      <div className='business-detail-container'>
        <div className='business-detail-inner-container'>

          <div className='business-detail-one'>
            <img
            className='business-detail-image'
            src='https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/images/KatePrevite_Lore_Spread_00005_gf8zsr'
            alt= 'business'
            >
            </img>
            <div className='business-detail-image-text-container'>
              <div className='business-detail-image-text-inner-container'>
                <div className='business-detail-image-text-name'>{currentBusiness?.name}</div>
                <div className='business-detail-image-text-review'>REVIEWS</div>
                <div className='business-detail-image-text-hours'>
                  <div className='business-detail-image-text-hours-open'>Open</div>
                  <div className='business-detail-image-text-hours-time'>10:00 AM - 12:00 AM</div>
                </div>
              </div>
            </div>
          </div>
          <div className='business-detail-two'>
            <div className='business-detail-two-inner-container'>
              <div className='business-detail-two-left'>
                <div className='business-detail-two-left-inner-container'>
                  <div className='business-detail-two-left-button'>BUTTONS</div>
                  {user?.id == currentBusiness?.owner_id && (
                  <button className='delete_business_button' onClick={editBusiness(currentBusiness.id)}>Edit</button>
                  )}
                  {user?.id == currentBusiness?.owner_id && (
                <button className='delete_business_button' onClick={removeBusiness(currentBusiness.id)}>Delete</button>
                )}
                  <div className='business-detail-two-left-menu-container'>
                    <div className='business-detail-two-left-menu'>MENU</div>
                    <div className='business-detail-two-left-dishes'>Popular dishes</div>
                  </div>

                  <div className='business-detail-two-left-location-hours-container'>
                    <div className='business-detail-two-left-location-hours-header'>Location & Hours</div>
                  </div>

                </div>
              </div>

              <div className='business-detail-two-right'>
                <div className='business-detail-two-right-box'>
                  <div className='business-detail-two-right-box-website'>{currentBusiness?.website}</div>
                  <div className='business-detail-two-right-box-phone'>{currentBusiness?.phone}</div>
                  <div className='business-detail-two-right-box-direction'>
                    <div className='business-detail-two-right-box-direction-one'>Get Directions:</div>
                    <div className='business-detail-two-right-box-direction-two'>
                      <div>{currentBusiness?.address}</div>
                      <div>{currentBusiness?.zipCode}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BusinessesDetailsCopy;
