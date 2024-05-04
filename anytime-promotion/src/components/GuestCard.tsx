interface GuestCardProp {
  image: string;
}

export default function GuestCard({image}: GuestCardProp) {

  return (
    <>
    <li style={{ width: 'calc(33.33% - 8px)' }} className="bg-lightGray py-5">
      <div>
        <img className="w-full h-full" src={image} />
      </div>
    </li>
    </>
  )
}
