export default function ContactForm() {


  return (
    <>
    <div className="bg-offWhite h-screen">
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <div className="md:w-2/3 md:pl-10 pt-10">
          <div>
            <h1 className="text-3xl text-center">Get In Touch</h1>
            <p className="text-xl pt-5 text-center">Please fill out the form and we will be in touch with you shortly</p>
          </div>
        </div>
        <div className="md:w-1/3 pt-5">
          <div className="mx-3">
            <form className="flex flex-col">
              <input type='text' className="bg-offWhite my-3 " placeholder="Full Name" required />
              <hr className="bg-black rounded rounded-xl py-0.5"/>
              <input type='text' className="bg-offWhite my-3" placeholder="Email" required />
             <hr className="bg-black rounded rounded-xl py-0.5"/>
              <input type='text' className="bg-offWhite my-3" placeholder="Subject" required />
             <hr className="bg-black rounded rounded-xl py-0.5"/>
              <textarea rows={6} className="bg-offWhite my-3" placeholder="Message" required />
             <hr className="bg-black rounded rounded-xl py-0.5"/>
              <button type="submit" className="w-28 p-2 bg-darkRed text-white hover:bg-red-900  rounded rounded-lg mt-5">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
