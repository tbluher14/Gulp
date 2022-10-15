import { Link } from 'react-router-dom';
import './BusinessCard.css';

const BusinessCard = ({ business }) => {
  return (
    <Link to={`/businesses/${business?.id}`}>
      <div className='business-card-container'>
        <div>Hello</div>
        <div>NAME:{business.name} </div>
        <div>CITY:{business.city}</div>
      </div>
    </Link>
  );
}

export default BusinessCard;
