import { NavLink, useHistory } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

  const history = useHistory()

  return (
    <div className='homepage-container'>
      <h1>Home Page</h1>
      <div className='homepage-picture-container'>
        <img className='homepage-picture' src='https://www.seriouseats.com/thmb/5avoLwcpCbqBCZX6Gnp24QNIBZ8=/1500x844/smart/filters:no_upscale()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg'></img>
        <button className="homepage-business-button" onClick={() => history.push('/businesses')}>View All Businesses</button>
      </div>
    </div>
  );
}

export default HomePage;
