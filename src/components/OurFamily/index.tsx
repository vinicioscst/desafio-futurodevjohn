import GymCouple from '../../assets/gym-couple.svg';
import { OurFamilyCard } from '../OurFamilyCard';

export function OurFamily() {
  return (
    <div className='flex flex-col-reverse xl:flex-row items-center justify-between gap-12 md:gap-8 w-full mx-auto pt-20'>
      <img src={GymCouple} alt='Casal se exercitando' className='bg-left-bottom'/>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-5'>
          <h2 className='font-bungee text-5xl md:text-[3.875rem] text-center xl:text-left'>Faça parte <span className='font-bebasNeue text-6xl md:text-[5.125rem]'>da família</span>
          </h2>
          <p className='font-montserrat text-lg text-center xl:text-left'>Nossa academia tem milhares de clientes satisfeitos com resultados surpreendentes. Junte-se a nós e comece a transformar seu corpo agora!</p>
        </div>
        <div className='flex flex-wrap items-center justify-center xl:justify-between gap-12 py-4'>
            <OurFamilyCard title='+15' text='Unidades na cidade de São Paulo.'/>
            <OurFamilyCard title='+2000' text='Alunos matriculados em nossas unidades.'/>
            <OurFamilyCard title='+100' text='Professores altamente qualificados.'/>
        </div>
      </div>
    </div>
  );
}
