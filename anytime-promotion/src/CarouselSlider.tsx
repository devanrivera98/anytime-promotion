import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { sliderPhotos } from './CarouselObject';

export default function Slider() {
  const [isCurrent, setIsCurrent] = useState(0);

  const handleCustomClickShow = (index: number) => {
    setIsCurrent(index);
  };

  return (
    <div className="pt-5 bg-offWhite homepage">
      <div className="flex justify-center">
        <LeftArrow onCustomClick={() => setIsCurrent((isCurrent - 1 + sliderPhotos.length) % sliderPhotos.length)}/>
        <img className="h-64 rounded rounded-xl banner" src={sliderPhotos[isCurrent].url} alt={sliderPhotos[isCurrent].name} />
        <RightArrow onCustomClick={() => setIsCurrent((isCurrent + 1 + sliderPhotos.length) % sliderPhotos.length)} />
      </div>
      <div className='flex justify-center pt-2 space-x-8'>
        {Buttons({ count: sliderPhotos.length, current: isCurrent, onCustomClickShow: handleCustomClickShow })}
      </div>
    </div>
  );
}

interface ButtonsProps {
  count: number;
  current: number;
  onCustomClickShow: (index: number) => void;
}

function Buttons({ count, current, onCustomClickShow } : ButtonsProps) {
  const buttons: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <EachButton key={i} isActive={i === current} onCustomClick={() => onCustomClickShow(i)} />
    );
  }
  return <>{buttons}</>;
}

interface EachButtonProps {
  isActive: boolean;
  onCustomClick: () => void;
}

 function EachButton({ isActive, onCustomClick }: EachButtonProps)  {
  return (
    <div>
      <FontAwesomeIcon onClick={onCustomClick} size='lg' icon={isActive ? solidCircle : regularCircle} style={{ color: '#000000' }} />
    </div>
  );
}

interface ArrowProp {
  onCustomClick: () => void
}

function LeftArrow({onCustomClick}: ArrowProp) {
  return (
  <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' onClick={onCustomClick} icon={faAngleLeft} size="2xl" style={{ color: "#444040" }} />
  )
}

function RightArrow({onCustomClick}: ArrowProp) {
  return (
  <FontAwesomeIcon className='md:block hidden my-auto icon-arrow' onClick={onCustomClick} icon={faAngleRight} size="2xl" style={{ color: "#444040" }} />
  )
}
