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
          <div className="bg-gray-400 mx-3">
            <form className="flex flex-col">
              <input className="mx-5 my-3 rounded rounded-md" placeholder="Full Name" required />
              <hr className="bg-black rounded rounded-xl py-1"/>
              <input className="mx-5 my-3  rounded rounded-md" placeholder="Email" required />
              <input className="mx-5 my-3  rounded rounded-md" placeholder="Subject" required />
              <input className="mx-5 my-3 rounded rounded-md" placeholder="Message" required />
              <button className="w-20 bg-darkRed">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
