import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteBusinessThunk, getAllBusinessesThunk } from '../../store/business';
import { useHistory, useParams } from 'react-router-dom';


const BusinessesDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const businessId = useParams()

    const business = useSelector(state => (state.business))
    const user = useSelector((state) => state.session.user);
    const currentBusiness = business[businessId.businessId]

    // console.log("this is businessesssssss", business)
    // console.log('this is business id', businessId.businessId)
    // console.log('this is current business', currentBusiness)

    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
    }, [])

    const removeBusiness = (businessId) => async (e) => {
        e.preventDefault();
        const res = await dispatch(deleteBusinessThunk(businessId))
        history.push('/businesses')
        return res
    }

    return (
        <div>
          {currentBusiness?.name}
          {currentBusiness?.city}
          {currentBusiness?.state}

            {user?.id == currentBusiness?.owner_id && (
                <button className='delete_business_button' onClick={removeBusiness(2)}>Delete</button>
            )}
        </div>
    )
}

export default BusinessesDetails;
