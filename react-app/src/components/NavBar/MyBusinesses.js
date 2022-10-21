import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinessesThunk } from "../../store/business";
import { getAllUsersThunk } from "../../store/users";
import BusinessCard from "../BusinessCard";


const MyBusinesses = () => {
    const dispatch = useDispatch()
    const businesses = useSelector(state => state.business);
    const sessionUser = useSelector(state => state.session.user);
    // const userBusinesses = businesses.filter(business => business.user_id === sessionUser.id)

    const businessesArr = Object.values(businesses)
    const userBusinesses = businessesArr.filter(business => business.owner_id === sessionUser.id)
    console.log(userBusinesses)
    useEffect(() => {
        dispatch(getAllBusinessesThunk())
        dispatch(getAllUsersThunk())
    },[])

    return (

        < div>
        {userBusinesses.map(business => (
            <BusinessCard business={business} />
        ))}

        </div>
    )

    }

export default MyBusinesses;
