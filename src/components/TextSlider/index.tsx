import { SliderItemsContainer } from '../SliderItemsContainer';

export function TextSlider() {
  return (
      <div className='w-[200%] h-14 relative pointer-events-none bg-eerie-gray overflow-x-hidden'>
        <div className='h-14 absolute flex items-center justify-start gap-11 left-0 animate-textslider'>
          <SliderItemsContainer />
          <SliderItemsContainer />
          <SliderItemsContainer />
          <SliderItemsContainer />
          <SliderItemsContainer />
          <SliderItemsContainer />
        </div>
      </div>
  );
}
