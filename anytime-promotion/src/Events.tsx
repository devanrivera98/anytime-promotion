import EventsCard from "./EventsCard"


export default function Events() {

  return (
    <>
      <div className="bg-offWhite">
        <div>
          <div className="flex justify-center text-4xl py-6">
            <h1>Upcoming Event!</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">Whittier Comic Fest 2024</h1>
          </div>
          <div className="flex justify-center flex-col items-center">
            <EventsCard guest='Whittier Comic Fest' color="bg-darkerGray" instagram='https://www.instagram.com/p/CzUmHzHPSvl/' image="/dark-red-whittier.png" date="June 8,2024" text="After the success of the first Whittier Comic Fest in 2023, we are proud to announce the next Whittier Comic Fest for June 2024. Stay tuned for additional information regarding our guest lineup, venue details, and event timings. We look forward to sharing more exciting details in the near future! Your attendence will make the event truly special, and we hope to see you there!"/>
          </div>
          <div className="flex justify-center text-4xl py-6">
            <h1>Past Event!</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">Whittier Comic Fest 2023</h1>
          </div>
          <div className="flex justify-center flex-col items-center">
            <EventsCard guest='Whittier Comic Fest' color="bg-darkBlue" instagram='https://www.instagram.com/p/CzUmHzHPSvl/' image="/whittier-comic-fest.jpg" date="November 18,2023" text="This was the offical guest list for the first ever Whittier Comic Fest. We are proud to have brought talented comic book figures and icons to Whittier along with an exciting lineup of vendors and indie creators. We look forward to sharing more about the Whittier Comic Fest 2024!"/>
          <div className="flex flex-col justify-center text-2xl py-2">
            <h1 className="text-2xl">X-Men Celebration</h1>
          </div>
            <EventsCard guest='X-Men Celebration' color="bg-darkBlue" instagram='https://www.instagram.com/p/CpBS1-XPLgq/' image="/x-men-celebration.jpeg" date="September 23,2023" text="We love the X-Men so much, we wanted to celebrate with them! We were happy to host Larry Houston and Steven E. Gordon for signings and remarques. We are looking into hosting more themed events similar to this one in the near future!"/>
          </div>
        </div>
      </div>
    </>
  )
}
