import AllGuest from "./components/AllGuest"
import LocationSection from "./components/LocationSection"

export default function WhittierFestPage() {

  return (
    <>
    <div className="min-h-screen">
      <div style={{height: '500px'}}>
        <picture>
          <source srcSet="whittier-header-mobile.png" media="(max-width: 640px)" />
          <source srcSet="whittier-header-mini.png" media="(max-width: 767px)" />
          <source srcSet="whittier-header.png" media="(max-width: 1200px)" />
          <img className="h-full w-full" src="whittier-header.png" />
        </picture>
      </div>
      <section className="px-5">
        <div className="flex justify-center py-5">
          <h1 className="text-5xl">Special Guest</h1>
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
