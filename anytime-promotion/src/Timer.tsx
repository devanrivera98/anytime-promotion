export default function Timer() {

  return (
    <>
    <header className='bg-darkRed py-2'>
    <div className="flex justify-center pt-2">
      <div className="timer-group px-1">
        <div className="value days bg-white rounded flex justify-center">02</div>
        <div className="unit text-white">Days</div>
      </div>
      <div className="timer-group px-1">
        <div className="value hours bg-white rounded flex justify-center">00</div>
        <div className="unit text-white">Hours</div>
      </div>
      <div className="timer-group px-1">
        <div className="value minutes bg-white rounded flex justify-center">00</div>
        <div className="unit text-white">Minutes</div>
      </div>
      <div className="timer-group px-1">
        <div className="value seconds bg-white rounded flex justify-center">00</div>
        <div className="unit text-white">Seconds</div>
      </div>
    </div>
    </header>
    </>
  )

}
