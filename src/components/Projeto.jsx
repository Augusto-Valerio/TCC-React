import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';

export default function Projeto() {
  return (
    <div className="font-body bg-body">  
      <div className="flex justify-center items-center min-h-screen">
        <main className="flex flex-col items-center space-y-16">

          <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-start sm:space-x-8 ">
            <img className="w-full mt-24 sm:w-auto sm:h-80  sm:mt-28 sm:mb-28 sm:ml-80 sm:mr-32 " src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-base leading-7  border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-28 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-8 ">
              <span className="font-bold font-poppins ">Objetivo do Projeto:</span> <br /> <br /> 
              O Cubo Multisensorial tem como objetivo oferecer um recurso inovador para a terapia de pessoas com transtornos mentais. Através de estímulos visuais, auditivos e táteis, o cubo busca promover o desenvolvimento cognitivo, emocional e social dos usuários, contribuindo para o seu bem-estar e qualidade de vida.
            </p>
          </section>

          <section className="flex flex-col items-center sm:flex-row w-full px-4 sm:items-start sm:space-x-8">
            <img className="w-full mb-8 sm:w-auto sm:h-80 sm:mb-28 sm:ml-80 sm:mr-32" src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-base  leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto font-inter sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-5 ">
              <span className="font-bold font-poppins">Importância do Brinquedo Multissensorial:</span> <br /> <br /> 
              Brinquedos multissensoriais são ferramentas valiosas na terapia de indivíduos com transtornos mentais, pois estimulam diferentes sentidos simultaneamente. Essa abordagem pode ajudar a melhorar a concentração, a comunicação e as habilidades motoras, além de proporcionar momentos de relaxamento e diversão.
            </p>
          </section>

        </main>
      </div>

      <footer className="flex flex-col items-center justify-center p-4 font-inter text-texto w-full h-auto bg-navbar-footer mt-16 gap-4 sm:flex-row sm:gap-8  sm:h-24 ">
        <p className="text-center sm:text-left">
          Fale conosco: 
        </p>

        <div className="flex gap-4">
          <a href="#"><img className="h-6 w-auto" src={gmail} alt="gmail logo" /></a>
          <a href="#"><img className="h-6 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
          <a href="#"><img className="h-6 w-auto" src={instagram} alt="instagram logo"/></a>
        </div>
      </footer>
    </div>
  );
}
