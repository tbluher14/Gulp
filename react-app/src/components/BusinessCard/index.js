import { NavLink, useHistory } from 'react-router-dom'
import './BusinessCard.css';

const BusinessCard = ({ business }) => {
  const history = useHistory()

  return (
    <div className='business-card'>
      <div onClick={() => history.push(`/businesses/${business?.id}`)}>
        <div className='business-card-container'>
          <div className='business-card-inner-container'>

            <div className='business-card-inner-container-left'>
              <img className='business-card-picture' src='https://loving-newyork.com/wp-content/uploads/2021/08/Manhatta-Restaurant-NYC-190909102021004-1.jpeg'></img>
            </div>

            <div className='business-card-inner-container-right'>
              <div>NAME: {business.name}</div>
              <div>CITY: {business.city}</div>
              <div>DESCRIPTION: {business.description}</div>
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}

export default BusinessCard;
