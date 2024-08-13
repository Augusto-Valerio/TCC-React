import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';

export default function Home() {
  return (
    <div className="font-inter bg-body">  
      
      <div className="flex justify-center items-center">
        <main className="flex flex-col items-center ">
          <section className="text-texto flex flex-col items-center w-[90%] h-auto mt-8">
            <h1 className="font-poppins font-bold text-titulo mb-8 mt-20 text-3xl leading-tight text-center sm:text-4xl">
              Bem-vindo ao Projeto <br /> <span className="text-titulo2">Cubo Multissensorial</span>
            </h1>

            <img className="w-full sm:w-3/4 md:w-1/2" src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-base leading-6 mt-8 border border-rounded rounded-lg w-full px-4 py-4 text-texto sm:text-lg md:text-xl sm:w-4/5 md:w-1/2">
              Nosso projeto, desenvolvido como Trabalho de Conclusão de Curso, é um brinquedo comunicador multisensorial em formato de cubo, criado para apoiar o desenvolvimento pessoal e ajudar pessoas com transtornos mentais. Utilizando a tecnologia Arduino, nosso cubo integra luzes, som e interações táteis para proporcionar uma experiência terapêutica e educativa.
            </p>
          </section>
        </main>
      </div>

      <footer className="flex flex-col sm:flex-row items-center justify-center text-texto w-full h-auto  bg-navbar-footer mt-20 gap-4 p-4 sm:gap-8 sm:h-24 ">
        <p className="text-center sm:text-left">
          Fale conosco:
        </p>

        <div className="flex gap-4">
          <a href="#"><img className="h-6 w-auto" src={gmail} alt="gmail logo" /></a>
          <a href="#"><img className="h-6 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
          <a href="#"><img className="h-6 w-auto" src={instagram} alt="instagram logo" /></a>
        </div>
      </footer>
    </div>
  );
}
