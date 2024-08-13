import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';

export default function Tecnologia() {
  return (
    <div className="font-body bg-body">
      <div className="flex justify-center items-center min-h-screen px-4">
        <main className="w-full">

          <section className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row md:items-start">
            <img className="w-full h-auto mt-24 md:mt-36  md:mb-28 md:ml-20 md:mr-36 md:h-80 md:w-auto" src={imagens} alt="imagens do projeto da home" />

            <div className="text-center flex items-center md:items-start md:text-left">

              <div className=' md:ml-36'>
            <h2 className="text-titulo text-3xl text-center px-4 pt-5 font-poppins md:mt-28 sm:text-4xl sm:mr-64">
                Tecnologia Usada
              </h2>
                
                <p className="text-base text-center border border-rounded rounded-lg px-4 py-6 mb-8 text-texto mt-8 mx-auto font-inter max-w-4xl md:ml-0 md:text-center sm:text-xl sm:w-2/3">
                  O Arduino é uma plataforma de prototipagem eletrônica  de código aberto, baseada em hardware e software 
                  flexíveis e fáceis de usar. No nosso cubo, utilizamos  o Arduino para controlar LEDs, alto-falantes e sensores,  criando interações dinâmicas que respondem ao toque e ao som.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center mt-8 space-y-8 md:space-y-0 md:space-x-8 md:flex-row md:items-start">
            <img className="w-full h-auto mt-8 md:mt-20 md:mb-28 md:ml-20 md:mr-8 md:h-80 md:w-auto" src={imagens} alt="imagens do projeto da home" />

            <div className="flex flex-col space-y-4">
              <h2 className="text-titulo text-3xl text-center mb-2 px-4 pt-5 font-poppins md:mt-10 md:justify-center md:flex  sm:text-4xl md:text-left">
                Componentes do Cubo Multisensorial
              </h2>

              <div className=" gap-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <p className="px-4 py-6 text-texto text-center font-inter max-w-4xl mx-auto text-base  border border-rounded rounded-lg  md:text-center sm:text-xl">
                  <span className="font-bold font-poppins">LEDs RGB:</span> <br /><br />Utilizamos LEDs RGB para criar uma ampla gama de cores e padrões de luz, proporcionando estímulos visuais variados.
                </p>

                <p className=" px-4 py-6 text-texto text-center font-inter max-w-4xl mx-auto text-base border border-rounded rounded-lg sm:text-xl md:text-center">
                  <span className="font-bold font-poppins">Sensores de Toque:</span> <br /><br />Sensores capacitivos detectam o toque dos usuários, desencadeando respostas sensoriais imediatas.
                </p>

                <p className=" px-4 py-6 text-texto text-center font-inter max-w-4xl mx-auto text-base border border-rounded rounded-lg sm:text-xl md:text-center">
                  <span className="font-bold font-poppins">Alto-falantes:</span> <br /><br />Peças fundamentais para emitir sons terapêuticos e músicas que acompanham as interações.
                </p>

                <p className="px-4 py-6 text-texto text-center font-inter max-w-4xl mx-auto text-base border border-rounded rounded-lg  sm:text-xl md:text-center">
                  <span className="font-bold font-poppins">Módulo Bluetooth:</span> <br /><br />Permite a conexão do cubo a dispositivos móveis, possibilitando a personalização das interações e o controle remoto.
                </p>
              </div>
            </div>
          </section>

        </main>
      </div>

      <footer className="flex flex-col items-center justify-center text-texto font-inter w-full h-auto bg-navbar-footer mt-16 gap-4 sm:gap-8 p-4  sm:flex-row sm:h-24">
        <p className="text-center sm:text-left">Fale conosco:</p>

        <div className="flex gap-4">
          <a href="#"><img className="h-6 w-auto" src={gmail} alt="gmail logo" /></a>
          <a href="#"><img className="h-6 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
          <a href="#"><img className="h-6 w-auto" src={instagram} alt="instagram logo" /></a>
        </div>
      </footer>
    </div>
  );
}
