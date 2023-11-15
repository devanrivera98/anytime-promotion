import EventsCard from "./EventsCard"

export default function Events() {

  return (
    <>
      <div>
        <div className="flex justify-center text-2xl pt-5">
          <h1>Upcoming Event!</h1>
        </div>
        <div>
          <div className="flex justify-center text-2xl pt-5">
            <h1>Past Event!</h1>
          </div>
          <EventsCard/>
          <EventsCard/>
        </div>
      </div>
    </>
  )
}
