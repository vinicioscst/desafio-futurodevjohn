import { Input } from "../Input";
import { toggleButtonMessage } from "../DifferentialsCard";

export function ContactForm() {
  return (
    <form className="self-center lg:self-start items-center lg:items-start flex flex-col gap-7">
      <fieldset className="flex justify-center lg:justify-start flex-wrap gap-7">
          <Input type="text" placeholder="Nome" />
          <Input type="tel" placeholder="Telefone" />
      </fieldset>
      <button className='font-montserrat text-lg font-bold leading-none py-3 pl-3 pr-5 uppercase text-white bg-[#FF3939] hover:bg-[#FF3939]/90 clip-path-polygonbutton transition-colors' onClick={(e) => toggleButtonMessage(e)}>Solicitar contato</button>
    </form>
  );
}
