import './404Page.css'
import { useHistory, useParams } from "react-router-dom";

const FourOFour = () => {
  const history = useHistory()

  return (
    <div className="FOF-container">

      <div className='FOF-image-container'>
        <div className='FOF-header'>404</div>
        <div className='FOF-body'>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</div>
        <img className='FOF-image' src='https://www.tastingtable.com/img/gallery/common-mistakes-everyone-makes-with-burgers/l-intro-1655906637.jpg'></img>
        <div className='FOF-home-container'>
          <div className='FOF-home' onClick={() => history.push(`/`)}>Go back home</div>

        </div>
      </div>
    </div>
  )
}

export default FourOFour;
