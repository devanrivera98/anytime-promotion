import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function Homepage() {

  return (
    <>
      <div className="pt-5 bg-offWhite homepage">
        <div className="flex justify-center">
          <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' icon={faAngleLeft} size="2xl" style={{color: "#444040",}} />
          <img className="h-64" src="https://t4.ftcdn.net/jpg/04/92/06/53/360_F_492065380_eSlHdkdNBy6ArNkk5gV0Lme1qhvTosSI.jpg" />
          <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' icon={faAngleRight} size="2xl" style={{color: "#444040",}} />
        </div>
      </div>
    </>
  )
}
