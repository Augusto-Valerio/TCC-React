import { useState, useEffect } from 'react';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import setaDireita from '../assets/setaDireita.svg';
import setaEsquerda from '../assets/setaEsquerda.svg';
import arduino1 from '../assets/arduino1.png';
import arduino2 from '../assets/arduino2.png';
import leds from '../assets/leds.jpg';
import ultrassonico from '../assets/ultrassonico.png';
import bluetooth from '../assets/bluetooth.png';
import buzzer from '../assets/buzzer.png';

export default function Tecnologia() {
  const [currentImage, setCurrentImage] = useState(arduino1);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [currentSecondImage, setCurrentSecondImage] = useState(leds);

  const paragraphs = [
    {
      title: "LEDs",
      content: "Utilizamos LEDs para criar uma ampla gama de cores e padrões de luz, proporcionando estímulos visuais variados."
    },
    {
      title: "Sensores de Movimento",
      content: "Sensores capacitivos detectam o toque dos usuários, desencadeando respostas sensoriais imediatas."
    },
    {
      title: "Alto-falantes",
      content: "Peças fundamentais para emitir sons terapêuticos e músicas que acompanham as interações."
    },
    {
      title: "Módulo Bluetooth",
      content: "Permite a conexão do cubo a dispositivos móveis, possibilitando a personalização das interações e o controle remoto."
    }
  ];

  const imageMap = {
    "LEDs": leds,
    "Sensores de Movimento": ultrassonico,
    "Alto-falantes": buzzer,
    "Módulo Bluetooth": bluetooth
  };

  useEffect(() => {
    setCurrentSecondImage(imageMap[paragraphs[currentParagraph].title]);
  }, [currentParagraph]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === arduino1 ? arduino2 : arduino1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    }
  };

  const handlePrev = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    }
  };

  return (
    <div className="font-body bg-body min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-7xl px-4">
        <main className="w-full">

          <section className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
            <img className="w-full h-auto mt-24 md:mt-36 md:mb-28 md:h-80 md:w-auto" src={currentImage} alt="Imagens de Arduino" />

            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 md:mt-36">
              <h2 className="text-titulo text-3xl px-4 py-6 font-poppins font-bold sm:text-4xl md:px-0 sm:ml-40 md:mt-10">
                Tecnologia Usada
              </h2>
              <p className="text-base border border-rounded rounded-lg px-4 py-6 mb-8 text-texto mt-8 font-inter max-w-4xl md:text-left sm:text-xl md:text-center md:mt-16">
                O Arduino é uma plataforma de prototipagem eletrônica de código aberto, baseada em hardware e software 
                flexíveis e fáceis de usar. No nosso cubo, utilizamos o Arduino para controlar LEDs, alto-falantes e sensores, criando interações dinâmicas que respondem ao toque e ao som.
              </p>
            </div>
          </section>

          <section className="flex flex-col items-center mt-8 space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
            <img className="w-full h-auto mt-8 md:mt-20 md:mb-28 md:h-80 md:w-auto" src={currentSecondImage} alt="Imagens do projeto do cubo" />

            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
              <h2 className="text-titulo text-3xl mb-2 px-4 pt-5 font-poppins font-bold md:mt-10 sm:text-4xl md:mb-12 md:text-center">
                Componentes do Cubo Multisensorial
              </h2>
              <div className="relative w-full">
                <div className="flex justify-between items-center px-4 py-6 text-texto text-center font-inter max-w-4xl mx-auto text-base border border-rounded rounded-lg sm:text-xl sm:mb-24">
                  <button
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
                    onClick={handlePrev}
                    disabled={currentParagraph === 0}
                  >
                    <img src={setaEsquerda} alt="Seta para a esquerda" className="h-6 w-6" />
                  </button>
                  <div className="mx-4 flex-1">
                    <span className="font-bold font-poppins">{paragraphs[currentParagraph].title}:</span> <br /><br />
                    {paragraphs[currentParagraph].content}
                  </div>
                  <button
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
                    onClick={handleNext}
                    disabled={currentParagraph === paragraphs.length - 1}
                  >
                    <img src={setaDireita} alt="Seta para a direita" className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      <footer className="flex flex-col items-center justify-center text-texto font-inter w-full h-auto bg-navbar-footer mt-16 gap-4 sm:gap-8 p-4 sm:flex-row sm:h-24">
        <p className="text-center sm:text-left">Fale conosco:</p>

        <div className="flex gap-4">
          <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=tcc.sensor2024@gmail.com"><img className="h-6 w-auto" src={gmail} alt="gmail logo" /></a>
          <a target="_blank" href="https://wa.me/5511974517730"><img className="h-6 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
          <a target="_blank" href="https://www.instagram.com/sensor_2024/"><img className="h-6 w-auto" src={instagram} alt="instagram logo" /></a>
        </div>
      </footer>
    </div>
  );
}
