import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import Objetivo from '../assets/Objetivo.jpg';

export default function Projeto() {
  return (
    <div className="font-body bg-body min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col items-center space-y-16 w-full mt-24 sm:mt-2">

        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8 sm:mt-36">
          <img className="w-full sm:w-auto sm:h-80" src={Objetivo} alt="imagens do projeto da home" />

          <p className="text-center text-base leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-0 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-8">
            <span className="font-bold font-poppins">Objetivo do Projeto:</span> <br /> <br />
            O Cubo Multisensorial tem como objetivo oferecer um recurso inovador para a terapia de pessoas com transtornos mentais. Através de estímulos visuais, auditivos e táteis, o cubo busca promover o desenvolvimento cognitivo, emocional e social dos usuários, contribuindo para o seu bem-estar e qualidade de vida.
          </p>
        </section>

        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8">
          <img className="w-full sm:w-auto sm:h-80" src={Objetivo} alt="imagens do projeto da home" />

          <p className="text-center text-base leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-0 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-5">
            <span className="font-bold font-poppins">Importância do Brinquedo Multissensorial:</span> <br /> <br />
            Brinquedos multissensoriais são ferramentas valiosas na terapia de indivíduos com transtornos mentais, pois estimulam diferentes sentidos simultaneamente. Essa abordagem pode ajudar a melhorar a concentração, a comunicação e as habilidades motoras, além de proporcionar momentos de relaxamento e diversão.
          </p>
        </section>

      </main>

      <footer className="flex flex-col items-center justify-center p-4 font-inter text-texto w-full h-auto bg-navbar-footer mt-16 gap-4 sm:flex-row sm:gap-8 sm:h-24">
        <p className="text-center sm:text-left">
          Fale conosco:
        </p>

        <div className="flex gap-4">
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=tcc.sensor2024@gmail.com"><img className="h-6 w-auto" src={gmail} alt="gmail logo" /></a>
          <a target="_blank" href="https://wa.me/5511974517730"><img className="h-6 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
          <a target="_blank" href="https://www.instagram.com/sensor_2024/"><img className="h-6 w-auto" src={instagram} alt="instagram logo" /></a>
        </div>
      </footer>
    </div>
  );
}
