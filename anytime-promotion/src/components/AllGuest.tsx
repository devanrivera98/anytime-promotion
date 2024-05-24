import GuestCard from "./GuestCard";

const guestList = [
  {
  name: 'David Mack',
  photo: 'whittier-guest/david-mack.png',
  number: 1
  },
  {
    name: 'Larry Houston',
    photo: 'whittier-guest/larry-houston.png',
    number: 2
  },
  {
    name: 'Joe Rubinstein',
    photo: 'whittier-guest/joe-rubinstein.png',
    number: 2
  },
  {
    name: 'Juan Gedeon',
    photo: 'whittier-guest/juan-gedeon.png',
    number: 3
  },
  {
    name: 'Norm Rapmund',
    photo: 'whittier-guest/norm-rapmund.png',
    number: 4
  },
  {
    name: 'Madison Brunoehler',
    photo: 'whittier-guest/madison-brunoehler.png',
    number: 5
  },
  {
    name: 'Don Walker',
    photo: 'whittier-guest/don-walker.png',
    number: 6
  },
  {
    name: 'Rafael Navarro',
    photo: 'whittier-guest/rafael-navarro.png',
    number: 7
  },
  {
    name: 'Steven Gordon',
    photo: 'whittier-guest/steven-gordon.png',
    number: 8
  },
  {
    name: 'David Avallone',
    photo: 'whittier-guest/david-avallone.png',
    number: 9
  },
  {
    name: 'Jamie Sullivan',
    photo: 'whittier-guest/jamie-sullivan.png',
    number: 10
  },
  {
    name: 'Lak Lim',
    photo: 'whittier-guest/lak-lim.png',
    number: 11
  },
  {
    name: 'Scott Shaw',
    photo: 'whittier-guest/scott-shaw.png',
    number: 12
  },
  {
    name: 'El Kartun',
    photo: 'whittier-guest/el-kartun.png',
    number: 13
  },
  {
    name: 'Javier Hernandez',
    photo: 'whittier-guest/javier-hernandez.png',
    number: 14
  },
  {
    name: 'Karl Altstaetter',
    photo: 'whittier-guest/karl-altstaetter.png',
    number: 15
  },
  {
    name: 'Ray-Anthony Height',
    photo: 'whittier-guest/ray-anthony-height.png',
    number: 16
  },
  {
    name: 'Ruben Najera',
    photo: 'whittier-guest/ruben-najera.png',
    number: 17
  },
];

export default function AllGuest() {


  return (
    <>
    {guestList.map(({ name, photo, number }, index) => {
      return (
      <GuestCard key={index} image={photo} name={name} number={number} />
      )
    })}
    </>
  )
}
