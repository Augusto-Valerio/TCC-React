import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';

export default function Home() {
  return (
    <div className="font-body bg-body">
      <div className="flex justify-center items-center min-h-screen">
        <main className="">
          <section className="flex items-start space-x-8">
            <img className="h-80 w-auto mt-20 mb-28 ml-20 mr-32" src={imagens} alt="imagens do projeto da home" />

            <div className="">
              <h2 className="text-titulo text-4xl text-center px-4 pt-5 mt-12 font-poppins ml-36">Tecnologia Usada</h2>

              <p className="text-center text-xl border border-rounded rounded-lg px-4 pt-6 pb-6 text-texto mt-8 ml-36 font-inter">
                O Arduino é uma plataforma de prototipagem eletrônica <br /> de código aberto, baseada em hardware e software <br /> 
                flexíveis e fáceis de usar. No nosso cubo, utilizamos <br /> o Arduino para controlar LEDs, alto-falantes e sensores, <br /> criando interações dinâmicas que respondem ao toque e <br />ao som.
              </p>
            </div>
          </section>

          <section className="flex items-start mt-8">
            <img className="h-80 w-auto mt-20 mb-28 ml-20 mr-8" src={imagens} alt="imagens do projeto da home" />

            <div className="flex flex-col space-y-4">
              <h2 className="text-titulo text-4xl text-center px-4 pt-5 mt-10 font-poppins">Componentes do Cubo Multisensorial</h2>

              <div className="flex space-x-8 mt-2">
                <p className="text-center text-xl border border-rounded rounded-lg px-4 pt-5 pb-2 text-texto font-inter w-64">
                  <span className="font-bold font-poppins">LEDs RGB:</span> <br /><br />Utilizamos LEDs RGB para criar uma ampla gama de cores e padrões de luz, proporcionando estímulos visuais variados.
                </p>

                <p className="text-center text-xl border border-rounded rounded-lg px-4 pt-5 pb-2 text-texto font-inter w-64">
                  <span className="font-bold font-poppins">Sensores de Toque:</span> <br /><br />Sensores capacitivos detectam o toque dos usuários, desencadeando respostas sensoriais imediatas.
                </p>

                <p className="text-center text-xl border border-rounded rounded-lg px-4 pt-5 pb-2 text-texto font-inter w-64">
                  <span className="font-bold font-poppins">Alto-falantes:</span> <br /><br />Peças fundamentais para emitir sons terapêuticos e músicas que acompanham as interações.
                </p>

                <p className="text-center text-xl border border-rounded rounded-lg px-4 pt-5 pb-2 text-texto font-inter w-64">
                  <span className="font-bold font-poppins">Módulo Bluetooth:</span> <br /><br />Permite a conexão do cubo a dispositivos móveis, possibilitando a personalização das interações e o controle remoto.
                </p>
              </div>
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
