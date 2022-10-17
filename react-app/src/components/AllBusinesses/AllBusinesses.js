import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBusinessesThunk } from '../../store/business';
import { getAllReviewsThunk } from '../../store/review';
import BusinessCard from '../BusinessCard';
import './AllBusinesses.css'
import { getAllUsersThunk } from '../../store/users';


const AllBusinesses = () => {
    const dispatch = useDispatch();

    const businesses = useSelector(state => (state.business))
    const reviews = useSelector(state => (state.review))
    // const businessesArr = Object.values(businesses)

    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
        dispatch(getAllReviewsThunk())
        dispatch(getAllUsersThunk())
    }, [])

    // console.log("this is businessesssssss", businesses)

    return (
        <div className='all-business-container'>
            {Object.values(businesses).map((business) => (
                <>
                <div className='all-businesses-card-container'>
                    <BusinessCard key={business.id} business={business}/>
                </div>
                </>
            ))}
        </div>
    )
}

export default AllBusinesses;
