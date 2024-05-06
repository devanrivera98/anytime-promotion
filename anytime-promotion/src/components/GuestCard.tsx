interface GuestCardProp {
  image: string;
}

export default function GuestCard({image}: GuestCardProp) {

  return (
    <>
    <li className="bg-lightGray py-10 guestWidth">
      <div>
        <img className="w-full h-full" src={image} />
      </div>
    </li>
    </>
  )
}
