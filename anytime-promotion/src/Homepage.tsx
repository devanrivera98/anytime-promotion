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
      <div className=" bg-offWhite py-10 md:flex mx-auto justify-evenly">
        <div className="my-auto md:mx-3">
          <img className="max-h-80 p-3 border mx-auto border-black" src={ericCarousel[isCurrent]} />
        </div>
        <div className="md:w-1/3 my-5 sm:my-0 mx-5 md:px-0 text-center md:text-left">
          <h1 className="text-5xl mb-2">Hi, I'm Eric</h1>
          <p>
          I am the enthusiastic founder of Anytime Promotions, deeply rooted in my love for comics and collectibles. Since embarking on this journey in 2022, I've had the privilege of organizing events with respected comic book figures like David Mack, Norm Rapmund and Guy Gilchrist, aiming to enrich the cultural fabric of my hometown, Whittier, CA.
          <br/> <br/>
          I am currently involved in promoting for legendary comic book inker Joe Rubinstein. In this role, I take on various marketing tasks and am always eager to connect with new clients who are interested in strengthening their promotional efforts.
          <br/> <br/>
          One of my most exciting projects is the development of Whittier's first-ever "Comic-Con" through the Whittier Comic Fest. This event is envisioned as a celebration of comics, collectibles, and community, marking a new chapter in our local cultural scene. My dedication to comics extends beyond personal interest; it's about fostering a vibrant community and creating lasting memories.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
