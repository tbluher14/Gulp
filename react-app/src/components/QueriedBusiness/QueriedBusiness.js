import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchBusinessThunk } from '../../store/querybusiness'


const QueriedBusiness = () => {
  const dispatch = useDispatch();

  const queriedBusinesses = useSelector(state => (state.queryBusiness))
  const queriedBusinessesArr = Object.values(queriedBusinesses)

  console.log('this is queriedBusinesses from redux', queriedBusinesses)

  useEffect((e) => {
    // dispatch(searchBusinessThunk())
  }, [])

  return (
    <div>
      {queriedBusinessesArr.map((business) => (
        <div>
          <h1>{business.name}</h1>
          <h1>{business.address}</h1>
          <h1>{business.city}</h1>
          <h1>{business.state}</h1>
          <h1>{business.country}</h1>
          <h1>{business.zipCode}</h1>
          <h1>{business.website}</h1>
          <h1>{business.phone}</h1>
        </div>
      ))}
    </div>
  )
}

export default QueriedBusiness;
