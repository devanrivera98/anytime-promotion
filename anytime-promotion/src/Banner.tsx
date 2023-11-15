export default function Banner() {

  return (
    <>
    <header className='bg-darkRed py-1'>
      <div>
        <div className="text-white text-xl flex justify-center my-auto">
          <div className="text-yellow-500">
            <div>Whittier Comic Fest&nbsp;</div>
          </div>
        </div>
        <div className="flex justify-center text-white">
          <p >November 13th, 2023 at Whittier Convention Center</p>
        </div>
        <div className="flex justify-center text-white">
          <a href="/events" className="underline font-extrabold hover:cursor-pointer">Learn More</a>
        </div>
      </div>
    </header>
    </>
  )

}
