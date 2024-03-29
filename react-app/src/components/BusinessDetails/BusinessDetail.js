import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { deleteBusinessThunk, getAllBusinessesThunk } from '../../store/business';
import { Link, useHistory, useParams } from 'react-router-dom';
import CreateReviewModal from '../Reviews/CreateReviewModal';
import './BusinessDetail.css'
import ReviewCard from '../Reviews/ReviewCard';
import { getAllReviewsThunk } from '../../store/review';
import { getAllMenuItemsThunk } from '../../store/menuItem';
import MenuItemCard from '../MenuItemCard';
import { getAllUsersThunk } from '../../store/users';


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
  const specific_menuArr = Object.values(specific_menu)

  let threeMenuItems = []
  if (specific_menuArr.length === 1) {
    threeMenuItems.push(specific_menuArr[0])
  } else if (specific_menuArr.length === 2) {
    threeMenuItems.push(specific_menuArr[0])
    threeMenuItems.push(specific_menuArr[1])
  } else if (specific_menuArr.length >= 3) {
    threeMenuItems.push(specific_menuArr[0])
    threeMenuItems.push(specific_menuArr[1])
    threeMenuItems.push(specific_menuArr[2])
  }

  // Reviews Logic
  const businessReviews = Object.values(reviews)
  const businessReviewsArray = businessReviews.filter(review => review?.business_id === currentBusiness?.id)
  const userReview = businessReviewsArray.filter(review => user?.id === review.user_id)
  const businessWebsite = currentBusiness?.website

  const averageReview = (businessReviewsArray) => {
    let total = 0
    for (let i = 0; i < businessReviewsArray.length; i++) {
      total += businessReviewsArray[i].rating
    }
    return (total / businessReviewsArray.length).toFixed(2)
  }


  // Formatted Phone
  const formattedPhone = `(${currentBusiness?.phone.slice(0, 3)}) ${currentBusiness?.phone.slice(3, 6)}-${currentBusiness?.phone.slice(6, 10)}`



  useEffect((e) => {

    (async ()=> {
      await dispatch(getAllUsersThunk())
      await dispatch(getAllBusinessesThunk())
      await setIsLoaded(true)
      await dispatch(getAllReviewsThunk())
      await dispatch(getAllMenuItemsThunk())
    })();
  }, [])

  if (!isLoaded) return null

  const removeBusiness = (businessId) => async (e) => {
    e.preventDefault();
    history.push('/businesses')
    const res = await dispatch(deleteBusinessThunk(businessId))
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
          <div id="image-container">
            <img
              className='business-detail-image'
              src={currentBusiness?.image}
              alt='Business Image'
              onError={e => {
                e.currentTarget.src = "https://www.hollywoodreporter.com/wp-content/uploads/2019/07/good_burger_pop_up_.jpg"
              }}
            >
            </img>
          </div>
          <div className='business-detail-image-text-container'>
            <div className='business-detail-image-text-inner-container'>
              <div className='business-detail-image-text-name'>{currentBusiness?.name}</div>
              <div className='business-detail-image-text-review'><i className="fa-solid fa-star"></i>{businessReviewsArray.length ? averageReview(businessReviewsArray) : "No Reviews Yet!"}</div>
              <div className='business-detail-image-text-hours'>
                {/* <div className='business-detail-image-text-hours-open'>{currentBusiness?.open < currentTime ? "Closed" : "Open" && currentBusiness?.close> currentTime ? "Closed": "Open"}</div> */}
                <div className='business-detail-image-text-hours-open'>Hours Today:</div>
                <div className='business-detail-image-text-hours-time'>{currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness?.ampmclose}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='business-detail-two'>
          <div className='business-detail-two-inner-container'>
            <div className='business-detail-two-left'>
              <div className='business-detail-two-left-inner-container'>

                <div className='business-detail-two-left-button'>

                  {user?.id == currentBusiness?.owner_id && (
                    <button className='business-detail-edit-button' onClick={editBusiness(currentBusiness.id)}>Edit Business</button>
                  )}
                  {user?.id == currentBusiness?.owner_id && (
                    <button className='business-detail-delete-button' onClick={removeBusiness(currentBusiness.id)}>Delete Business</button>
                  )}
                  {user?.id !== currentBusiness?.owner_id && !userReview.length && (
                    <button className='business-detail-review-button' onClick={reviewBusiness(currentBusiness?.id)}>
                      <i className="fa-regular fa-star"></i> Write a Review</button>
                  )}

                </div>

                <div className='business-detail-two-left-menu-container'>
                  <div className='business-detail-two-left-menu'>MENU</div>

                  <div className='business-detail-two-left-dishes'>
                    <div className='business-detail-two-left-popular'>
                      <div>Popular dishes</div>
                      <div className='business-detail-view-menu-container' onClick={() => history.push(`/businesses/menu/${businessId.businessId}`)}>
                        <div className='business-detail-view-menu'>View full menu</div>
                        <div>{`>`}</div>
                      </div>
                    </div>
                    <div className='business-detail-two-left-menuitems'>
                      {threeMenuItems.map(menuItems => (
                        <MenuItemCard menuItems={menuItems} key={menuItems.id}></MenuItemCard>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='business-detail-two-left-location-hours-container'>
                  <div className='business-detail-two-left-location-hours-header'>Business Hours:</div>
                  <div> Monday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                  <div> Tuesday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                  <div> Wednesday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                  <div> Thursday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                  <div> Friday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                  <div> Saturday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                  <div> Sunday: {currentBusiness?.open} {currentBusiness?.ampmopen} - {currentBusiness?.close} {currentBusiness.ampmclose}</div>
                </div>

                <div className='business-detail-two-left-reviews-container'>
                  <div className='business-detail-two-left-reviews-header'>Reviews</div>
                </div>

                {reviews && (
                  businessReviewsArray.map((review) => (
                    <ReviewCard key={review.id} review={review} className='review-cards' />
                  )))}

              </div>
            </div>

            <div className='business-detail-two-right'>
              <div className='business-detail-two-right-box'>

                <div className='business-detail-two-right-box-website'><a href={currentBusiness?.website} target="_blank">Business Website</a>
                  <i className="fa-solid fa-share-from-square"></i>
                </div>

                <div className='business-detail-phone'>{formattedPhone}
                  <i className="fa-solid fa-phone-volume"></i>
                </div>

                <div className='business-detail-two-right-box-direction'>
                  <div>
                    <div className='business-detail-two-right-box-direction-one'>Address</div>
                    <div className='business-detail-two-right-box-direction-two'>
                      <div>{currentBusiness?.address}</div>
                      <div>{currentBusiness?.zipCode}</div>
                    </div>

                  </div>

                  <div className='business-detail-direction'>
                    <i className="fa-regular fa-map"></i>
                  </div>
                </div>

                <div className='business-detail-description'>{currentBusiness?.description}</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default BusinessesDetails;
