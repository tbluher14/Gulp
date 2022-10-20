import { useEffect  } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { searchBusinessThunk } from '../../store/querybusiness'
import BusinessCard from '../BusinessCard';


const QueriedBusiness = () => {
  const dispatch = useDispatch();

  const queriedBusinesses = useSelector(state => (state.queryBusiness))
  const queriedBusinessesArr = Object.values(queriedBusinesses)

  const url = useLocation().search
  // console.log("URL******", url)

  useEffect(() => {
    dispatch(searchBusinessThunk(url.split("=")[1]))
  }, [dispatch, url])

  return (
    <div className='all-business-container'>
      {queriedBusinessesArr.map((business) => (
        <div className='all-businesses-card-container'>
          <BusinessCard business={business}/>
        </div>
      ))}
    </div>
  )
}

export default QueriedBusiness;
