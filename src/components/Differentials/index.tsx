import { DifferentialsCard } from '../DifferentialsCard';
import DifferentialIcon1 from '../../assets/differential-icon-1.svg'
import DifferentialIcon2 from '../../assets/differential-icon-2.svg'
import DifferentialIcon3 from '../../assets/differential-icon-3.svg'
import DifferentialIcon4 from '../../assets/differential-icon-4.svg'

export function Differentials(){
    return(
        <div className='flex flex-col items-center gap-28 w-full mx-auto py-40 text-center'>
            <h2 className='font-bungee text-5xl md:text-[3.875rem]'>Nossos <span className='font-bebasNeue text-6xl md:text-[5.125rem]'>diferenciais</span></h2>

            <div className='flex flex-wrap justify-center items-center'>
                <DifferentialsCard icon={DifferentialIcon1} title='Equipe Qualificada' description='Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos.' button='Conheça nossos
profissionais' buttonSize='sm'/>
                <DifferentialsCard icon={DifferentialIcon2} title='Ambiente Motivador' description='Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos.' button='Faça um tour
virtual' buttonSize='sm'/>
                <DifferentialsCard icon={DifferentialIcon3} title='Aulas Diversas' description='Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses.' button='Ver modalidades' buttonSize='lg'/>
                <DifferentialsCard icon={DifferentialIcon4} title='Equipamentos Modernos' description='Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes.' button='Faça um tour
virtual' buttonSize='sm'/>
            </div>
        </div>
    )
}