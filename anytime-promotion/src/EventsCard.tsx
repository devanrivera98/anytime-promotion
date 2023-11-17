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
      <div className={`${color} border border-4 border-black rounded rounded-lg m-5 md:mx-20 md:w-1/2 lg:w-1/3`}>
        <div className="text-xl text-gray-300 flex justify-center">
          <h1 className="font-black">{guest}</h1>
        </div>
        <div className="text-white flex justify-center">
          <h1>{date}</h1>
        </div>
        <div className="flex justify-center">
          {/* make href a prop tomorrow  */}
          <a href={instagram} target="_blank" rel="noopener">
            <img className="w-64" src={image} />
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
