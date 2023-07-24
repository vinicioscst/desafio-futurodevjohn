import { toggleButtonMessage } from '../DifferentialsCard';

interface IPlansCardProps {
    img: string;
    title: string;
    info: string;
    highlightInfo?: string;
    isRecommended: boolean;
}
export function PlansCard({img, title, info, highlightInfo, isRecommended} : IPlansCardProps){
    return(
        <div className='w-full max-w-[317px] xl:max-w-[399px] hover:scale-105 transition-transform'>
            {isRecommended && <div className='w-full p-2 bg-strong-red'><p className='font-montserrat text-lg font-bold text-center uppercase'>Recomendado pelos usuários</p></div>}
            <img src={img} alt='' />
            <div className={`${isRecommended ? 'bg-strong-red' : 'bg-black'} py-2 pt-3 px-5`}>
                <h4 className='font-bebasNeue text-[42px] leading-none'>{title}</h4>
            </div>
            <div className='flex flex-wrap gap-1 justify-center xl:justify-between items-center py-2 px-5 bg-[#B4B4B4]'>
                {highlightInfo ? (
                    <p className='font-montserrat text-2xl text-center xl:text-start text-dark-gray max-w-[176px]'>{info} <span className='font-bold text-white'>{highlightInfo}</span></p>
                ) : (
                    <p className='font-montserrat text-2xl text-center xl:text-start text-dark-gray max-w-[176px]'>{info}</p>
                )}
                <button className={`border  rounded-full py-3 px-2 font-montserrat font-bold text-lg uppercase ${isRecommended ? 'text-strong-red border-strong-red hover:text-strong-red/90 hover:border-strong-red/90' : 'text-dark-gray border-dark-gray hover:text-dark-gray/90 hover:border-dark-gray/90'} transition-colors`} onClick={toggleButtonMessage}>Selecionar</button>
            </div>
        </div>
    )
}