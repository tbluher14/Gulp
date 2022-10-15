import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllBusinessesThunk } from '../../store/business';


const AllBusinesses = () => {
    const dispatch = useDispatch();

    const businesses = useSelector(state => (state.business))
    // const businessesArr = Object.values(businesses)

    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
    }, [])

    console.log("this is businessesssssss", businesses)

    return (
        <div>
            {Object.values(businesses).map((business) => (
                <>
                <div key={business.id}> NAME:{business.name} </div>
                <div>CITY:{business.city}</div>
                </>
            ))}
        </div>
    )
}

export default AllBusinesses;
