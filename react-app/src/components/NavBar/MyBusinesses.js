import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinessesThunk } from "../../store/business";
import { Redirect } from 'react-router-dom';
import { getAllUsersThunk } from "../../store/users";
import BusinessCard from "../BusinessCard";


const MyBusinesses = () => {
    const dispatch = useDispatch()
    const businesses = useSelector(state => state.business);
    const sessionUser = useSelector(state => state.session.user);
    const [isLoaded, setIsLoaded] = useState(false);
    // const userBusinesses = businesses.filter(business => business.user_id === sessionUser.id)
    useEffect(() => {
        dispatch(getAllUsersThunk()).then(() => setIsLoaded(true))
        dispatch(getAllBusinessesThunk())
    },[])

    if (!sessionUser) return <Redirect to="/" />;
    const businessesArr = Object.values(businesses)
    const userBusinesses = businessesArr.filter(business => business.owner_id === sessionUser.id)


    return isLoaded && (

        < div>
        {
        userBusinesses.length < 1 ? <h2 className="no-businesses">No Businesses Yet!</h2> :
        userBusinesses.map(business => (
            <BusinessCard business={business} key={business.id}/>
        ))}

        </div>
    )

    }

export default MyBusinesses;
