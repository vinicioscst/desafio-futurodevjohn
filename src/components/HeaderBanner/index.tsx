import GymMale from '../../assets/gym-male.svg';
import Arrow from '../../assets/arrow.svg';


export function HeaderBanner(){
    return(
            <section className='flex flex-col md:flex-row items-center md:justify-between gap-5 pt-10 lg:pt-0'>
                <div className='flex flex-col items-center md:items-start gap-5 md:gap-0 py-5 lg:py-0'>
                    <h1 className='font-bungee text-center md:text-left text-6xl lg:text-[5.125rem] leading-snug'>Aqui não se <span className='font-bebasNeue text-7xl lg:text-[6.375rem] leading-none'>treina fofo</span></h1>

                    <p className='font-montserrat text-lg text-center md:text-left max-w-[689px] mb-7'>Transforme-se na nossa academia! Oferecemos equipamentos modernos, instrutores qualificados e aulas para todos os níveis. Alcance seus objetivos fitness conosco. Experimente hoje!</p>

                    <a href={`#contact`}><button className='flex items-center py-2 pl-6 pr-9 gap-4 font-bebasNeue bg-eerie-gray hover:bg-eerie-gray/90 text-[2rem] hover:text-white/90 clip-path-mypolygon cursor-pointer transition-colors'>
                        Começar
                        <img src={Arrow} alt='Começar'/>
                    </button></a>
                </div>
                <img src={GymMale} alt="Homem fazendo exercícios" className='md:self-end lg:self-center lg:w-fit' />
            </section>
    )
}