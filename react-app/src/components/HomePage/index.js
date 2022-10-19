import { NavLink, useHistory } from 'react-router-dom'
import './HomePage.css'
import github from './github.png'
import linkedin from './linkedin.png'

const HomePage = () => {

  const history = useHistory()

  return (
    <div className='homepage-container'>
      {/* <h1>Home Page</h1> */}
      <div className='homepage-picture-container'>
        <img className='homepage-picture' src='https://www.seriouseats.com/thmb/5avoLwcpCbqBCZX6Gnp24QNIBZ8=/1500x844/smart/filters:no_upscale()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg'></img>
        <div className='homepage-welcome'>Welcome to gulped</div>
        <button className="homepage-business-button" onClick={() => history.push('/businesses')}>View All Businesses</button>
      </div>

      <div className='homepage-bottom-container'>
        <div className='homepage-bottom-links'>

          <div className='homepage-links-matt'>
            <div className='homepage-first-last-name'>Matt Fong</div>
            <div>
              <a href='https://github.com/matt-fong'>
                <img className='home-page-github' src={github}></img>
              </a>
              <a href='https://www.linkedin.com/in/matthewfongny/'>
                <img className='home-page-linkedin' src={linkedin}></img>
              </a>
            </div>
          </div>

          <div className='homepage-links-tom'>
            <div className='homepage-first-last-name'>Tom Bluher</div>
            <div>
              <a href='https://github.com/tbluher14'>
                <img className='home-page-github' src={github}></img>
              </a>
              <a href='https://www.linkedin.com/in/tom-bluher-172321115/'>
                <img className='home-page-linkedin' src={linkedin}></img>
              </a>
            </div>
          </div>

          <div className='homepage-links-will'>
            <div className='homepage-first-last-name'>Will Marett</div>
            <div>
              <a href='https://github.com/codewjm'>
                <img className='home-page-github' src={github}></img>
              </a>
              <a href='https://www.linkedin.com/in/will-marett-a0b4b3188/'>
                <img className='home-page-linkedin' src={linkedin}></img>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
