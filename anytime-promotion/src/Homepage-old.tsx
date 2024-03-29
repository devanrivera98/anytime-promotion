// import Slider from './Slider';
import Marquee from "react-fast-marquee";
import Slider from "./Slider";

export default function Homepage() {

  return (
    <>
    <div className="min-h-screen relative">
      <Marquee className='bg-darkRed py-4 z-10' pauseOnHover={true}>
        <div>
          <h1 className='md:text-2xl text-white'>
            &nbsp;&nbsp;&nbsp;&nbsp;Just Announced: Whittier Comic Fest - June 8, 2024! Stay tuned and follow us on social media for the latest updates!
          </h1>
        </div>
      </Marquee>
      <Slider />
      <div className="my-10">
        <div>
          <h1 className="text-4xl text-center">About Us</h1>
          <hr></hr>
        </div>
      </div>
    </div>
    </>
  );
}
