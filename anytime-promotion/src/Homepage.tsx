import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Homepage() {

  return (
    <>
      <div className="pt-5 bg-offWhite">
        <div className="flex justify-center">
          <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' icon={faAngleLeft} size="2xl" style={{color: "#444040",}} />
          <img className="h-64" src="https://www.beautylabinternational.com/wp-content/uploads/2020/03/Hero-Banner-Placeholder-Light-1024x480-1.png" />
          <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' icon={faAngleRight} size="2xl" style={{color: "#444040",}} />
        </div>
      </div>
    </>
  )
}
