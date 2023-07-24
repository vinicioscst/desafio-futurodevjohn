interface IOurFamilyCardProps {
    title: string;
    text: string;
}

export function OurFamilyCard({title, text}: IOurFamilyCardProps) {
  return (
    <div className='max-w-[205px]'>
      <h3 className='font-bebasNeue text-5xl md:text-6xl text-center lg:text-left lg:pl-6'>{title}</h3>
      <p className='font-montserrat text-base md:text-lg text-center lg:text-left'>{text}</p>
    </div>
  );
}
