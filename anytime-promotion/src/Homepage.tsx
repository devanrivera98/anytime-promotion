import HeroBanner from "./HeroBanner"

export default function Homepage() {

  return (
    <>
    <div>
      <HeroBanner/>
      <div className=" bg-offWhite py-10 sm:flex mx-auto justify-evenly">
        <div className="my-auto mx-3 sm:mx-0">
          <img className="max-h-80 p-3 border border-black" src="eric-photo-one.jpg" />
        </div>
        <div className="sm:w-1/2 my-5 sm:my-0 px-5 sm:px-0 text-center sm:text-left">
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
