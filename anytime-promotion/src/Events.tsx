import EventsCard from "./EventsCard"

export default function Events() {

  return (
    <>
      <div className="bg-offWhite">
        <div className="flex justify-center text-2xl pt-5">
          <h1>Upcoming Event!</h1>
        </div>
        <div className="flex justify-center text-xl pt-5">
          <EventsCard guest='Jed Thomas' color="bg-darkRed" image="https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/381225148_18287648383182295_4321184620617342404_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RwuKRTr4u2QAX_cAImh&_nc_ht=scontent-lax3-1.xx&oh=00_AfDr1blaShxIMAj--9br2H-AcJ7hRvI8CS9LuyB8jywRug&oe=655AD3A7" date="November 18,2023" text="            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
        </div>
        <div>
          <div className="flex justify-center text-2xl py-5">
            <h1>Past Event!</h1>
          </div>
          <div className="flex justify-center flex-wrap">
            <EventsCard guest='Don Walker' color="bg-gray-800" image="/anytime-promotion-test.jpeg" date="September 23,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
            <EventsCard guest='Don Walker' color="bg-gray-800" image="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/335677115_1219556448947683_1197824622335730349_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MbTpbJ-yiAEAX-DxLHU&_nc_ht=scontent-lax3-2.xx&oh=00_AfBTXvOFfyHJo5MoRFIwFfUewF9FAXt4_lRuOsvsoXXLMQ&oe=655AD25C" date="September 23,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
            <EventsCard guest='Don Walker' color="bg-gray-800" image="/anytime-promotion-test.jpeg" date="September 23,2023" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum. Sit amet risus nullam eget. Eget sit amet tellus cras adipiscing. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat."/>
          </div>
        </div>
      </div>
    </>
  )
}
