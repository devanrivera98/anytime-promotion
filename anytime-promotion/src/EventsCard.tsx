interface EventsCardProps {
  guest: string;
  date: string;
  image: string;
  text: string;
  color: string;
  instagram:string;
}

export default function EventsCard({guest,date,image,text, color, instagram} : EventsCardProps) {

  return (

    <>
      <div className={`${color} border border-4 border-black rounded rounded-lg m-5  md:w-1/2  event-card`}>
        <div className="py-1">
          <div className="text-xl text-gray-300 flex justify-center">
            <h1 className="font-black">{guest}</h1>
          </div>
          <div className="text-white flex justify-center">
            <h1>{date}</h1>
          </div>
        </div>
        <div className="mx-auto justify-center events-image-container">
          <a href={instagram} target="_blank" rel="noopener">
            <img className="w-full h-full object-fill" src={image} />
          </a>
        </div>
        <div className="p-1 mx-5">
          <p className="text-offWhite leading-7">
            {text}
          </p>
        </div>
      </div>
    </>
  )
}
