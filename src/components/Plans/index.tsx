import { PlansCard } from '../PlansCard';
import PassOneDay from '../../assets/pass-one-day.svg'
import PassOneMonth from '../../assets/pass-one-month.svg'
import PassOneYear from '../../assets/pass-one-year.svg'


export function Plans(){
    return(
        <div className='flex flex-col items-center gap-16 w-full mx-auto py-20'>
            <h2 className='font-bebasNeue text-6xl md:text-[5.125rem] text-center'>Nossos planos</h2>

            <div className='flex flex-col md:flex-row flex-wrap items-center md:items-end gap-4 justify-center w-full'>
                <PlansCard img={PassOneDay} title='Passe de 1 dia' info='Teste gratuitamente' isRecommended={false}/>
                <PlansCard img={PassOneMonth} title='Passe de 1 mês' info='A partir de' highlightInfo='R$99,90' isRecommended={true}/>
                <PlansCard img={PassOneYear} title='Passe de 1 ano' info='A partir de' highlightInfo='R$999,90' isRecommended={false}/>
            </div>
        </div>
    )
}