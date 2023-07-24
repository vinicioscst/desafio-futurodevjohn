import Logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className='sticky w-full flex flex-col md:flex-row justify-center sm:justify-between gap-8 sm:gap-4 items-center py-4'>
      <img
        src={Logo}
        alt='Logo da Robust Habit'
        className='cursor-pointer'
      />

      <nav>
        <ul className='flex flex-col sm:flex-row gap-8 justify-center items-center font-bebasNeue text-2xl'>
          <li className='cursor-pointer hover:text-white/90 transition-colors'>Sobre</li>
          <li className='cursor-pointer hover:text-white/90 transition-colors'>Serviços</li>
          <li className='cursor-pointer hover:text-white/90 transition-colors'>Preços</li>
          <li className='cursor-pointer hover:text-white/90 transition-colors'>Equipamentos</li>
          <a href={`#contact`}><li className='bg-eerie-gray hover:bg-eerie-gray/90 hover:text-white/90 clip-path-mypolygon py-2 px-8 cursor-pointer transition-colors'>
            Registre-se
          </li></a>
        </ul>
      </nav>
    </header>
  );
}
