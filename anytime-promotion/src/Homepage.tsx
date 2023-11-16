import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

export default function Homepage() {
  const [isCurrent, setIsCurrent] = useState(0);



  return (
    <>
      <div className="pt-5 bg-offWhite homepage">
        <div className="flex justify-center">
          <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' icon={faAngleLeft} size="2xl" style={{color: "#444040",}} />
          <img className="h-64 rounded rounded-xl banner" src="https://t4.ftcdn.net/jpg/04/92/06/53/360_F_492065380_eSlHdkdNBy6ArNkk5gV0Lme1qhvTosSI.jpg" />
          <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' icon={faAngleRight} size="2xl" style={{color: "#444040",}} />
        </div>
        <div className='flex justify-center pt-2 space-x-8'>
            <div >
               <FontAwesomeIcon className={`${isCurrent === 0 ? '' : 'hidden'}`} onClick={() => setIsCurrent(0)} size='lg' icon={solidCircle} style={{ color: '#000000' }} />
            </div>
            <div>
                 <FontAwesomeIcon size='lg'  icon={regularCircle} style={{ color: '#000000' }} />
            </div>
            <div>
               <FontAwesomeIcon size='lg'  icon={regularCircle} style={{ color: '#000000' }} />
            </div>
            <div>
                 <FontAwesomeIcon size='lg'  icon={regularCircle} style={{ color: '#000000' }} />
            </div>
        </div>
      </div>
    </>
  )
}
