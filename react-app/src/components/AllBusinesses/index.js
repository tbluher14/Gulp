import React from 'react'
import { useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { getAllBusinessesThunk } from '../../store/business';


const AllBusinesses = () => {
    const dispatch = useDispatch();

    useEffect((e) => {
        dispatch(getAllBusinessesThunk())
    }, [])

    return (
        <div>
            hello world
        </div>
    )
}

export default AllBusinesses;
