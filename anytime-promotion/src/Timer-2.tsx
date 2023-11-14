export default function Timer2() {

  return (
    <>
    <header className='bg-darkRed'>
      <div className="flex justify-between px-10">
        <div className="flex justify-center pt-2 cursor-default">
          <div className="timer-group px-1">
            <div className="value days bg-white rounded flex justify-center">02</div>
            <div className="unit text-white text-xs">Days</div>
          </div>
          <div className="timer-group px-1">
            <div className="value hours bg-white rounded flex justify-center">00</div>
            <div className="unit text-white text-xs">Hours</div>
          </div>
          <div className="timer-group px-1">
            <div className="value minutes bg-white rounded flex justify-center">00</div>
            <div className="unit text-white text-xs">Minutes</div>
          </div>
          <div className="timer-group px-1">
            <div className="value seconds bg-white rounded flex justify-center">00</div>
            <div className="unit text-white text-xs">Seconds</div>
          </div>
        </div>
        <div className="text-white text-2xl flex justify-center my-auto">
          <div className="text-yellow-500">
            <div>Whittier Comic Fest&nbsp;</div>
          </div>
        </div>
        <div className="my-auto text-white">
          <button className="bg-black border border-black rounded p-1">Learn More</button>
        </div>
      </div>
    </header>
    </>
  )

}
