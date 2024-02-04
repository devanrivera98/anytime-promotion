import HeroBanner from "./HeroBanner"
import { useState, useEffect } from "react"


export default function Homepage() {
  const [isCurrent, setIsCurrent] = useState(0);

  const ericCarousel = ['eric-photo-one.jpg', 'eric-photo-two.jpg']


  useEffect(() => {
    function alternate() {
    setIsCurrent((isCurrent + 1) % ericCarousel.length );
  };

    const intervalID = setInterval(alternate, 3000);

    return () => clearInterval(intervalID);
  },[isCurrent])

  return (
    <>
    <div>
      <HeroBanner/>
      <div className="eric-background py-10 md:flex mx-auto justify-evenly">
        <div className="my-auto md:mx-3 mx-3">
          <img className="max-h-80 p-3 border mx-auto border-black" src={ericCarousel[isCurrent]} />
        </div>
        <div className="md:w-1/3 my-5 sm:my-0 mx-5 md:px-0 text-center md:text-left">
          <h1 className="text-5xl mb-2 ">
            <span className='eric-title'>
              Hi, I'm Eric
            </span>
          </h1>
          <p className="text-lg">
          I am the passionate founder of Anytime Promotions, driven by my profound love for comics and collectibles. Since embarking on this exciting journey in 2022, I've had the incredible privilege of organizing events featuring esteemed comic book figures such as David Mack, Larry Houston, Norm Rapmund, and Guy Gilchrist. These endeavors are dedicated to enriching the cultural tapestry of my hometown, Whittier, CA.
          <br/> <br/>
          Currently, my focus lies in promoting the legendary comic book inker, Joe Rubinstein. In this role, I enthusiastically undertake various marketing tasks and am always eager to engage with new clients looking to enhance their promotional efforts. Additionally, I am actively involved in uniting comic book artists, writers, and talents from the broader pop culture sphere as part of the Whittier Comic Fest. This event is envisioned as a vibrant celebration of comics, collectibles, and community, heralding a new and exciting chapter in our local cultural scene.

          </p>
        </div>
      </div>
      <div className="bg-offWhite about-background text-white py-10">
        <div className="flex flex-col items-center mx-auto">
          <div className="w-5/6 sm:w-1/2 border border-white outline p-4">
            <div className="pb-4">
            <h1 className="text-4xl text-center">About Us</h1>
            </div>
            <div className="text-center text-xl sm:text-2xl">
              <p>
                Our dedication to comics goes beyond personal interest; it's about fostering a vibrant community that unites talented artists and passionate fans. Through our platform, we aim to break down barriers, enabling creators to connect directly with their audience. Join us on this journey as we bridge the gap between artists and fans, creating a space where the magic of storytelling thrives, and connections are forged that transcend the pages of a comic book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
