import GoogleMaps from "./GoogleMaps"

export default function LocationSection() {
  return (
    <>
    <section className="md:flex px-5">
      <GoogleMaps />
      <div className="md:w-1/2 py-5 md:py-0">
        <h1 className="text-center text-2xl">Whittier Community Center</h1>
        <div className="px-5 py-2 my-auto">
          <h2 className="text-xl text-center md:text-start">Directions:</h2>
          <div className="py-2">
            <p className="text-lg text-center md:text-start">The Whittier Convention Center is conveniently situated directly adjacent to Friends Park, located at the corner of Mar Vista St and Washington Ave in Whittier. For those arriving via southbound Washington Avenue, the entrance will be on your left, immediately recognizable by the building next to Friends Park. If you are coming eastbound on Mar Vista St, make a right turn onto Washington Ave, then take an immediate left into the parking lot. Look for landmarks like the Whittier Public Library across the street to help guide you to the location.</p>
          </div>
          <div className="text-center md:text-start">
            <a className="text-blue-500 underline hover:text-blue-400" href="https://www.google.com/maps/dir//Whittier+Community+Center,+7630+Washington+Ave,+Whittier,+CA+90602/@33.9729568,-118.0353897,18.09z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c2d393990cfee5:0x10c540d587958245!2m2!1d-118.0346213!2d33.9730284?hl=en&entry=ttu" target="_blank">Google Maps</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
