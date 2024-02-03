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
      {/* <div className="h-auto flex justify-center my-5 py-5 about-us">
        <div className="text-white flex flex-col w-1/3 mr-10">
          <h1 className="text-5xl">About Us</h1>
          <p>Welcome to Anytime Promotion, your gateway to unforgettable experiences and authentic connections. At the heart of our company, we specialize in bringing artists and celebrities closer to their fans through personalized signings and engaging events. We take pride in curating unique experiences that go beyond the ordinary, fostering genuine interactions that turn moments into cherished memories.

          Community is a cornerstone of our values at Anytime Promotion. We extend our commitment beyond the spotlight, actively involving local businesses and organizations in our events. As we celebrate the magic of promotions, we invite you to join us in creating lasting connections, supporting local communities, and making every moment truly special with Anytime Promotion.
          </p>
        </div>
        <div className="w-1/4 ml-10 my-auto">
          <img className="object-fit w-full max-h-96" src="fest-photo.png" />
        </div>
      </div> */}
    </div>
    </>
  );
}
