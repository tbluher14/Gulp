import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchBusinessThunk } from '../../store/querybusiness'


const QueriedBusiness = () => {
  const dispatch = useDispatch();


  useEffect((e) => {
    // dispatch(searchBusinessThunk())
  }, [])

  return (
    <div>
      testing
    </div>
  )
}

export default QueriedBusiness;
