import EventsCard from "./EventsCard"
import GuestCard from "./GuestCard"


export default function Events() {

  return (
    <>
      <div className="bg-offWhite">
        <div className="flex justify-center text-2xl pt-5">
          <h1>Upcoming Guest!</h1>
        </div>
        <div>
          <GuestCard />
        </div>
        <div className="flex justify-center text-2xl pt-5">
          <h1>Upcoming Event!</h1>
        </div>
        <div className="flex justify-center text-xl pt-5">
          <EventsCard guest='Jed Thomas' color="bg-darkRed" instagram='https://www.instagram.com/p/CzMuDwuPWZg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' image="anytime-promotion-image-one.jpeg" date="November 18,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
        </div>
        <div>
          <div className="flex justify-center text-2xl py-5">
            <h1>Past Event!</h1>
          </div>
          <div className="flex justify-center flex-wrap">
            <EventsCard guest='Don Walker' color="bg-gray-800" instagram='https://www.instagram.com/p/CzMuDwuPWZg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' image="/anytime-promotion-test.jpeg" date="September 23,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
            <EventsCard guest='Don Walker' color="bg-gray-800" instagram='https://www.instagram.com/p/CzMuDwuPWZg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' image="/anytime-promotion-test.jpeg" date="September 23,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
            <EventsCard guest='Don Walker' color="bg-gray-800" instagram='https://www.instagram.com/p/CzMuDwuPWZg/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==' image="/anytime-promotion-test.jpeg" date="September 23,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
          </div>
        </div>
      </div>
    </>
  )
}
