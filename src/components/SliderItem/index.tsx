import SliderDivisor from '../../assets/slider-divisor.svg'

interface ISliderItemProps {
    text: string;
}
export function SliderItem({text} : ISliderItemProps){
    return(
        <div className="flex justify-center items-center gap-11 pr-11">
                <p className='font-bebasNeue text-[2rem] leading-none whitespace-nowrap'>{text}</p>
                <img src={SliderDivisor} alt='' />
        </div>
    )
}