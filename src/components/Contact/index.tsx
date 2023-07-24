import { ContactForm } from '../ContactForm';
import GymFemale from '../../assets/gym-female.svg'

export function Contact(){
    return(
        <div className='relative flex flex-col lg:flex-row justify-between items-center lg:gap-16 w-full mx-auto'>
            <div className='flex flex-col gap-2 py-20 lg:py-32'>
            <h2 className='font-bebasNeue text-6xl md:text-[5.125rem] text-center lg:text-left leading-none'>Entre em contato</h2>
            <p className='font-montserrat text-lg md:text-2xl text-center lg:text-left pb-4'>Matricule-se agora mesmo! Fale com um de nossos atendentes</p>
            <ContactForm />
            </div>
            <img src={GymFemale} alt='' className='xl:absolute bottom-0 right-0'/>
        </div>
    )
}