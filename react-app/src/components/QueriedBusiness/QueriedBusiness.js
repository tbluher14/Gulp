import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchBusinessThunk } from '../../store/querybusiness'
import BusinessCard from '../BusinessCard';


const QueriedBusiness = () => {
  const dispatch = useDispatch();

  const queriedBusinesses = useSelector(state => (state.queryBusiness))
  const queriedBusinessesArr = Object.values(queriedBusinesses)

  return (
    <div>
      {queriedBusinessesArr.map((business) => (
        <div>
          <BusinessCard business={business}/>
        </div>
      ))}
    </div>
  )
}

export default QueriedBusiness;
