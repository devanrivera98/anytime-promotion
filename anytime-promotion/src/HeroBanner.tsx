export default function HeroBanner() {

return (
  <>
  <div className="homepage-hero flex flex-col justify-center items-center px-5">
      <div className="">
        <h1 className="text-white text-center text-6xl"> Because timing is everything</h1>
      </div>
      <div className="py-5">
        <h4 className="text-white text-center text-xl">Take a look at our upcoming events and stay up to date with us on Instagram</h4>
      </div>
      <div className="flex">
        <div className="mx-2">
        <a className="text-xl cursor-pointer text-white border rounded rounded-xl p-2 border-white" href="/events">Learn More</a>
        </div>
        <div className="mx-2">
          <a className="text-xl cursor-pointer text-white border border-black rounded rounded-xl p-2 hero-icon" href="https://www.instagram.com/anytimepromotions/" target='_blank'>
            Instagram
          </a>
        </div>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  </>
)
}
