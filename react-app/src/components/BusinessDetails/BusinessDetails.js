import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteBusinessThunk, getAllBusinessesThunk } from '../../store/business';
import { useHistory, useParams } from 'react-router-dom';


const BusinessesDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const businessId = useParams()
    const business = useSelector(state => (state.businessReducer))
    const currentBusiness = business[businessId]

    // const businessesArr = Object.values(businesses)

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
          {currentBusiness.name}
          <button className='delete_business_button' onClick={removeBusiness(businessId)}>Delete</button>
        </div>
}

export default BusinessesDetails;
