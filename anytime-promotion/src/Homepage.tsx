// import Slider from './Slider';
import Marquee from "react-fast-marquee";
import Slider from "./Slider";

export default function Homepage() {
  return (
    <>
    <div className="min-h-screen">
      <Marquee className='bg-darkRed mb-4 py-4 z-10' pauseOnHover={true}>
        <div>
          <h1 className='md:text-2xl text-white'>
            &nbsp;&nbsp;&nbsp;&nbsp;Just Announced: Whittier Comic Fest - June 8, 2024! Stay tuned and follow us on social media for the latest updates!
          </h1>
        </div>
      </Marquee>
      <Slider />
      {/* <div className='banner-height relative w-5/6 flex mx-auto'>
        <img className='w-full h-full object-fill' src='slider.png' />
      </div> */}
    </div>
    </>
  );
}
