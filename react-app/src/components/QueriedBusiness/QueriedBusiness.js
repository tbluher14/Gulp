import { useEffect  } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { searchBusinessThunk } from '../../store/querybusiness'
import BusinessCard from '../BusinessCard';
import './QueriedBusiness.css'


const QueriedBusiness = () => {
  const dispatch = useDispatch();

  const queriedBusinesses = useSelector(state => (state.queryBusiness))
  const queriedBusinessesArr = Object.values(queriedBusinesses)
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("name");

  const url = useLocation().search
  // console.log("URL******", url)


  useEffect(() => {
    dispatch(searchBusinessThunk(url.split("=")[1]))
  }, [dispatch, url])

  let queriedResults;

  if (queriedBusinessesArr.length === 0) {
    queriedResults = (
    <div className='all-business-container'>
      <div className='queriedbusiness-results'>
        0 businesses found for name: "{query}"
      </div>
    </div>
    )
  } else if (queriedBusinessesArr.length === 1) {
    queriedResults = (
      <div className='all-business-container'>
        <div className='queriedbusiness-results'>
          {queriedBusinessesArr.length} business found for "{query}"
        </div>
          {queriedBusinessesArr.map((business) => (
            <div className='all-businesses-card-container'>
              <BusinessCard business={business}/>
            </div>
          ))}
      </div>
    )
  } else if (queriedBusinessesArr.length > 1) {
    queriedResults = (
    <div className='all-business-container'>
      <div className='queriedbusiness-results'>
        {queriedBusinessesArr.length} businesses found for "{query}"
      </div>
        {queriedBusinessesArr.map((business) => (
          <div className='all-businesses-card-container'>
            <BusinessCard business={business}/>
          </div>
        ))}
    </div>
    )
  }

  return (
    <div>
      {queriedResults}
    </div>
  )
}

export default QueriedBusiness;
