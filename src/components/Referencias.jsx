import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

export default function Home() {
  return (
    <div className="font-body bg-body">
      <div className="flex justify-center items-center min-h-screen">
        <main className="">

        <h1 className="font-poppins font-bold text-titulo  mb-8 mt-28 text-4xl leading-10 text-center">
              Referências bibliográficas
            </h1>

          <section className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <img className="h-80 w-auto mt-20" src={img1} alt="imagens do projeto da home" />
              <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
                Otimizar o tratamento de pessoas com <br /> transtornos do neurodesenvolvimento <br /> e aprendizagem em todo o estado <br />
                <a className="text-navSelect" href="https://saude.mg.gov.br/assistenciafarmaceutica/story/19709-parques-multissensoriaisvaootimizar-o-tratamento-de-pessoas-com-transtornos-do-neurodesenvolvimento-e-aprendizagem-em-todo-o-estado">Acesse aqui</a>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <img className="h-80 w-auto mt-20" src={img2} alt="imagens do projeto da home" />
              <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
                A Importância dos Brinquedos <br /> Sensoriais Para o Desenvolvimento <br /> dos Pequenos <br />
                <a className="text-navSelect" href="https://colegiopequenoser.com.br/2022/08/23/a-importancia-dos-brinquedos-sensoriais-para-o-desenvolvimento-dos-pequenos/#:~:text=Os%20brinquedos%20sensoriais%20s%C3%A3o%20todos,ou%20coletando%20elementos%20da%20natureza.">Acesse aqui</a>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <img className="h-80 w-auto" src={img3} alt="imagens do projeto da home" />
              <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
                Brinquedos sensoriais: <br /> o que são, para que servem <br /> e quais os tipos <br />
                <a className="text-navSelect" href="https://marjan.com.br/blog/brinquedos-sensoriais-o-que-sao-para-que-servem-e-quais-os-tipos/">Acesse aqui</a>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <img className="h-80 w-auto" src={img4} alt="imagens do projeto da home" />
              <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
                Tecnologia no autismo: <br /> como ela auxilia no <br /> desenvolvimento de pessoas autistas? <br />
                <a className="text-navSelect" href="https://genialcare.com.br/blog/tecnologia-no-autismo/#:~:text=da%20inclus%C3%A3o%20educacional.-,Os%20benef%C3%ADcios%20da%20tecnologia%20no%20autismo,planejamento%20e%20na%20interven%C3%A7%C3%A3o%20terap%C3%AAutica.">Acesse aqui</a>
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="flex items-center justify-center text-texto w-full h-24 bg-navbar-footer mt-16 gap-8 font-inter">
        <p>Fale conosco:</p>

        <a href="#"><img className="h-4 w-auto" src={gmail} alt="gmail logo" /></a>
        <a href="#"><img className="h-4 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
        <a href="#"><img className="h-4 w-auto" src={instagram} alt="instagram logo" /></a>
      </footer>
    </div>
  );
}
