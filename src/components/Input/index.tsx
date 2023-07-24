interface IInputProps {
  type: string;
  placeholder: string;
}
export function Input({ type, placeholder }: IInputProps) {
  return (
    <div className='relative w-[234px] h-[42px] clip-path-mypolygon bg-white'>
      <input
        type={type}
        placeholder={placeholder}
        className='absolute top-[1px] right-[1px] left-[1px] bottom-[1px] clip-path-polygoninput bg-[#1E1E1E] py-2 px-4 font-montserrat md:text-lg uppercase text-white placeholder:text-white hover:bg-eerie-gray transition-colors'
      />
    </div>
  );
}
