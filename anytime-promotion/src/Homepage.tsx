
import Slider from './Slider';

export default function Homepage() {

  return (
    <>
      <Slider />
      <div className='relative flex overflow-x-hidden bg-darkBlue text-white'>
        <div className='animate-marquee whitespace-no-wrap'>
          <h1 className=''>Signed with artist such as Joe Rubinstein, Larry Houston, Chuck Patton, Jim Krueger, Javier Hernandez, Don Walker, and many more!  </h1>
        </div>
        <div className='absolute top-0 py-12 animate-marquee2 whitespace-no-wrap'>
          <h1>Signed with artists such as Joe Rubinstein, Larry Houston, Chuck Patton, Jim Krueger, Javier Hernandez, Don Walker, and many more!  </h1>
        </div>
      </div>
    </>
  )
}
