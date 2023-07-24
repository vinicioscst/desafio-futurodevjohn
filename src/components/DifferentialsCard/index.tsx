import Arrow from '../../assets/arrow.svg';
import { toast } from 'react-toastify';

interface IDifferentialsCardProps {
    icon: string;
    title: string;
    description: string;
    button: string;
    buttonSize: 'sm' | 'lg';
}

export function toggleButtonMessage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    toast.warn('Site ainda em construção!')
}

export function DifferentialsCard({icon, title, description, button, buttonSize} : IDifferentialsCardProps){
    return(
        <div className='group grid grid-cols-1 items-start justify-center w-full max-w-[310px] h-[413px] pt-6 px-6 pb-8 hover:bg-eerie-gray hover:scale-105 transition-all'>
            <img src={icon} alt='' className='justify-self-center md:justify-self-start'/>
            <h5 className='font-bebasNeue text-[1.75rem] md:text-start leading-none'>{title}</h5>
            <p className='font-montserrat md:text-start text-lg leading-tight'>{description}</p>
            <button className={`flex items-center justify-self-center md:justify-self-start self-end justify-between w-[187px] h-[54px] pl-6 pr-9 font-bebasNeue bg-eerie-gray group-hover:bg-strong-red hover:bg-strong-red/90 ${buttonSize === 'sm' ? 'text-base' : 'text-lg'} text-start leading-tight hover:text-white/90 clip-path-mypolygon cursor-pointer transition-colors`} onClick={(e) => toggleButtonMessage(e)}>{button} <img src={Arrow} alt=''/></button>
        </div>
    )
}