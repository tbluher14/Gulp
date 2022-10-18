import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { deleteBusinessThunk, getAllBusinessesThunk } from '../../store/business';
import { useHistory, useParams } from 'react-router-dom';
import CreateReviewModal from '../Reviews/CreateReviewModal';
import './BusinessDetail.css'
import ReviewCard from '../Reviews/ReviewCard';
import { getAllReviewsThunk } from '../../store/review';
import { getAllMenuItemsThunk } from '../../store/menuItem';
import MenuItemCard from '../MenuItemCard';
import MenuItemsModal from '../MenuItems/MenuItemsModal';


const BusinessesDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const businessId = useParams()

  const [isLoaded, setIsLoaded] = useState(false);

  const business = useSelector(state => (state.business))
  const user = useSelector((state) => state.session.user);
  const currentBusiness = business[businessId.businessId]
  const reviews = useSelector(state => (state.review))
  const menu_items = useSelector(state => (state.menuItems))

  // Menu Items Logic
  const menu_itemsArr = Object.values(menu_items)
  const specific_menu = menu_itemsArr.filter(menuItem => menuItem?.business_id == currentBusiness?.id)
  const specific_menuArr= Object.values(specific_menu)

  // Reviews Logic
  const businessReviews = Object.values(reviews)
  const businessReviewsArray = businessReviews.filter(review => review?.business_id === currentBusiness?.id)
  const userReview = businessReviewsArray.filter(review => user?.id === review.user_id)

  // Formatted Phone
  const formattedPhone = `(${currentBusiness?.phone.slice(0, 3)}) ${currentBusiness?.phone.slice(3, 6)}-${currentBusiness?.phone.slice(6, 10)}`


  useEffect((e) => {
    dispatch(getAllBusinessesThunk()).then(() => setIsLoaded(true))
    dispatch(getAllReviewsThunk())
    dispatch(getAllMenuItemsThunk())
  }, [])

  if (!isLoaded) return null

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

  const reviewBusiness = (businessId) => async (e) => {
    e.preventDefault();
    history.push(`/reviews/${currentBusiness.id}`)
  }
  const currentTime = new Date()

  return isLoaded && (
    <div className='business-detail-container'>
      <div className='business-detail-inner-container'>

        <div className='business-detail-one'>
          <img
            className='business-detail-image'
            src={currentBusiness?.image}
            alt='business'
          >
          </img>
          <div className='business-detail-image-text-container'>
            <div className='business-detail-image-text-inner-container'>
              <div className='business-detail-image-text-name'>{currentBusiness?.name}</div>
              <div className='business-detail-image-text-review'>REVIEW AVERAGE</div>
              <div className='business-detail-image-text-hours'>
                <div className='business-detail-image-text-hours-open'>{currentBusiness.open < currentTime ? "Closed" : "Open" && currentBusiness.close> currentTime ? "Closed": "Open"}</div>
                <div className='business-detail-image-text-hours-time'>Hours {currentBusiness?.open} - {currentBusiness?.close}</div>
              </div>
            </div>
          </div>
        </div>
        {specific_menuArr.map(menuItems => (
          <>
          {/* <MenuItemCard menuItems={menuItems}></MenuItemCard> */}
          {/* <MenuItemsModal menuItems={menuItems}/> */}
          </>
        ))}
        <div className='business-detail-two'>
          <div className='business-detail-two-inner-container'>
            <div className='business-detail-two-left'>
              <div className='business-detail-two-left-inner-container'>

                <div className='business-detail-two-left-button'>
                  {user?.id == currentBusiness?.owner_id && (
                    <button className='business-detail-edit-button' onClick={editBusiness(currentBusiness.id)}>Edit</button>
                  )}
                  {user?.id == currentBusiness?.owner_id && (
                    <button className='business-detail-delete-button' onClick={removeBusiness(currentBusiness.id)}>Delete</button>
                  )}
                  {user?.id !== currentBusiness?.owner_id && !userReview.length && (
                    <button className='business-detail-review-button' onClick={reviewBusiness(currentBusiness?.id)}>
                      <i class="fa-regular fa-star"></i> Write a Review</button>
                  )}
                  {specific_menuArr.map(menuItems => (
                    <>
                    {/* <MenuItemCard menuItems={menuItems}></MenuItemCard> */}
                    <MenuItemsModal menuItems={menuItems}/>
                    </>
                  ))}
                </div>

                <div className='business-detail-two-left-menu-container'>
                  <div className='business-detail-two-left-menu'>MENU</div>
                  <div className='business-detail-two-left-dishes'>Popular dishes</div>
                </div>

                <div className='business-detail-two-left-location-hours-container'>
                  <div className='business-detail-two-left-location-hours-header'>Location & Hours</div>
                </div>

                <div className='business-detail-two-left-reviews-container'>
                  <div className='business-detail-two-left-reviews-header'>Recommended Reviews</div>
                </div>

                {reviews && (
                  businessReviewsArray.map((review) => (
                    <ReviewCard key={review.id} review={review} className='review-cards' />
                )))}

              </div>
            </div>

            <div className='business-detail-two-right'>
              <div className='business-detail-two-right-box'>

                <div className='business-detail-two-right-box-website'>{currentBusiness?.website}
                  <i class="fa-solid fa-share-from-square"></i>
                </div>

                <div className='business-detail-phone'>{formattedPhone}
                 <i class="fa-solid fa-phone-volume"></i>
                </div>

                <div className='business-detail-two-right-box-direction'>
                  <div>
                    <div className='business-detail-two-right-box-direction-one'>Get Directions</div>
                    <div className='business-detail-two-right-box-direction-two'>
                      <div>{currentBusiness?.address}</div>
                      <div>{currentBusiness?.zipCode}</div>
                    </div>

                  </div>

                  <div className='business-detail-direction'>
                    <i class="fa-regular fa-map"></i>
                  </div>
                </div>

                <div className='business-detail-description'>{currentBusiness?.description}</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessesDetails;
