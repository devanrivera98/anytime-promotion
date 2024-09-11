export default function ContactForm() {


  return (
    <>
    <div className="bg-offWhite min-h-screen ">
      <div className="flex flex-col md:flex-row md:justify-evenly">
        <div className="md:w-2/3 md:pl-10 pt-10">
          <div>
            <h1 className="text-3xl text-center">Get In Touch</h1>
            <p className="text-xl pt-5 text-center mx-2">Have any questions or inquiries? Please fill out the form and we will be in touch with you shortly</p>
            <div className="flex justify-center pt-6 mx-2">
              <img src="contact-image.jpeg" className="w-100 bg-offWhite mix-blend-multiply" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 py-5">
          <div className="mx-3">
            <form name="react-contact-form" method="post" role="form" className="flex flex-col">
              <legend id="contact-form" className="sr-only">Contact Form</legend>
              <input type='hidden' name='form-name' value='contact' />
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input id="name" type='text' name="name" className="bg-offWhite my-3 md:mt-5 md:mb-0.5 py-2 pl-1" placeholder="Full Name" required />
              <hr className="bg-black rounded rounded-xl py-0.5"/>
              <label id="email" htmlFor="email" className="sr-only">Email</label>
              <input type='text' name="email" className="bg-offWhite my-3 md:my-0.5 py-2 pl-1" placeholder="Email" required />
             <hr className="bg-black rounded rounded-xl py-0.5"/>
              <label htmlFor="subject" className="sr-only">Subject</label>
              <input id="subject" type='text' name="subject" className="bg-offWhite my-3 md:my-0.5 py-2 pl-1" placeholder="Subject" required />
             <hr className="bg-black rounded rounded-xl py-0.5"/>
             <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={12} className="bg-offWhite my-3 md:my-0.5 py-2 pl-1" placeholder="Message" required />
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
