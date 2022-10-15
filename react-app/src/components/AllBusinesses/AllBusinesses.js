import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBusinessesThunk } from '../../store/business';
import { getAllReviewsThunk } from '../../store/review';
import BusinessCard from '../BusinessCard';


const AllBusinesses = () => {
    const dispatch = useDispatch();

    const businesses = useSelector(state => (state.business))
    const reviews = useSelector(state => (state.review))
    // const businessesArr = Object.values(businesses)

    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
        dispatch(getAllReviewsThunk())
    }, [])

    console.log("this is businessesssssss", businesses)

    return (
        <div>
            {Object.values(businesses).map((business) => (
                <>
                <BusinessCard key={business.id} business={business}/>
                </>
            ))}
        </div>
    )
}

export default AllBusinesses;
