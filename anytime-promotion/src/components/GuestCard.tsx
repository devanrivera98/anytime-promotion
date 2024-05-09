interface GuestCardProps {
  image: string;
  name: string;
  number: number;
}

export default function GuestCard({image, name, number}: GuestCardProps) {

  return (
    <>
    <li className="bg-lightGray py-10 guestWidth">
      <div>
        <img className="w-full h-full" src={image} alt={name} key={number} />
      </div>
    </li>
    </>
  )
}
