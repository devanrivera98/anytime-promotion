import GuestCard from "./components/GuestCard"

export default function WhittierFestPage() {

  return (
    <>
    <div className="min-h-screen">
      <div style={{height: '500px'}} className="">
        <img className="h-full w-full" src="whittier-center.png" />
      </div>
      <div className="px-5">
        <div className="flex justify-center py-5">
          <h1 className="text-5xl">Special Guest</h1>
        </div>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 ">
          <GuestCard image="david-mack.png" />
          <GuestCard image="david-mack.png" />
          <GuestCard image="david-mack.png" />
        </ul>
      </div>
    </div>
    </>
  )
}
