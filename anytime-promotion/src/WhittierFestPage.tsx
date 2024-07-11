import AllGuest from "./components/AllGuest"
import LocationSection from "./components/LocationSection"

export default function WhittierFestPage() {

  return (
    <>
    <div className="min-h-screen">
      <div>

      </div>
      <div className='flex flex-col md:flex-row'>
        <div className="order-2 md:order-1 bg-gradient-to-r from-gray-900 via-gray-800 via-blue-900 to-blue-900 w-full md:w-3/5 h-96 md:h-auto">
          <div className="flex flex-col justify-center  text-center h-full">
            <div className="px-2">
            <span className="text-white block text-5xl py-2">Thank you for your support.</span>
            <span className="text-white block text-2xl py-2">We look forward to see you again for Whittier Comic Fest 2025!</span>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 h-96 order-1 md:order-2">
          <img className="h-full w-full" src="whittier-bg.png" />
        </div>
        {/* <div style={{height: '500px'}}>
        <picture>
          <source srcSet="whittier-header-mobile.png" media="(max-width: 640px)" />
          <source srcSet="whittier-header-mini.png" media="(max-width: 767px)" />
          <source srcSet="whittier-header.png" media="(max-width: 1200px)" />
          <img className="h-full w-full" src="whittier-header.png" />
        </picture>
        </div> */}
      </div>
      <section className="px-5">
        <div className="flex justify-center py-5">
          <h1 className="text-5xl">Previous Guest</h1>
        </div>
        <ul className="flex flex-wrap guestGap gap-y-5">
          <AllGuest />
        </ul>
      </section>
      <section>
        <div className="flex justify-center py-5">
          <h1 className="text-5xl">Location</h1>
        </div>
        <LocationSection />
      </section>
    </div>
    </>
  )
}
