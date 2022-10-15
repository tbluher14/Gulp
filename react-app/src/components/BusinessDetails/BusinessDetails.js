import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBusinessesThunk } from '../../store/business';


const BusinessesDetails = () => {
    const dispatch = useDispatch();
    const businessId = useparams()
    const business = useSelector(state => (state.businessReducer))
    const currentBusiness = business[businessId]

    // const businessesArr = Object.values(businesses)

    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
    }, [])

    return (
        <div>
          {currentBusiness.name}
        </div>
    )
}

export default AllBusinesses;
