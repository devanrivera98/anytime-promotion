import Slider from './Slider';
import Marquee from "react-fast-marquee";

export default function Homepage() {
  return (
    <>
      <Slider />
      <Marquee className='bg-darkBlue my-4 py-4 z-10' pauseOnHover={true}>
        <div>
          <h1 className='md:text-2xl text-white'>
            &nbsp;Signed with artists such as Joe Rubinstein, Larry Houston, Chuck Patton, Jim Krueger, Javier Hernandez, Don Walker, and many more!
          </h1>
        </div>
      </Marquee>
    </>
  );
}
