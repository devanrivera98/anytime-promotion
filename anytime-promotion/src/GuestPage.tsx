import GuestCard from "./components/GuestCard"

export default function GuestPage() {

  return (
    <>
    <div className="flex justify-center text-2xl pt-5">
          <h1>Upcoming Guest!</h1>
        </div>
        <div>
          <GuestCard />
        </div>
    </>
  )
}
