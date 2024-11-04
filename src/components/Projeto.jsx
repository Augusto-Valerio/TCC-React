import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import Objetivo from '../assets/Objetivo.jpg';
import guia2 from '../assets/guia2.jpg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';
import videoJogo from '../assets/videoJogo.mp4';
import setaEsquerda from '../assets/setaEsquerda.svg';
import setaEsquerdaPreta from '../assets/setaEsquerdaPreta.svg';
import setaDireita from '../assets/setaDireita.svg';
import setaDireitaPreta from '../assets/setaDireitaPreta.svg';
import { useState } from 'react';

export default function Projeto() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    { src: video1 },
    { src: video2 },
    { src: video3 },
    { src: video4 }
  ];

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  };

  return (
    <div className="font-body bg-body min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col items-center space-y-16 w-full mt-24 sm:mt-2">

        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8 sm:mt-36">
          <div className="flex items-center">
            <button
              className="px-2 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
              onClick={handlePrev}
              disabled={currentVideoIndex === 0}
            >
              <img src={currentVideoIndex === 0 ? setaEsquerdaPreta : setaEsquerda} alt="Seta para a esquerda" className="h-6 w-6" />
            </button>

            <video
              className="w-full sm:w-auto sm:h-80 h-48"  // Limitando a altura do vídeo no mobile
              controls
              src={videos[currentVideoIndex].src}
            />

            <button
              className="px-2 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200"
              onClick={handleNext}
              disabled={currentVideoIndex === videos.length - 1}
            >
              <img src={currentVideoIndex === videos.length - 1 ? setaDireitaPreta : setaDireita} alt="Seta para a direita" className="h-6 w-6" />
            </button>
          </div>

          <p className="text-center text-base leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-0 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-5 lg:ml-6">
            <span className="font-bold font-poppins">Descrição Geral do Cubo Multissensorial: </span> <br /> <br />
            O cubo possui 4 lados interativos: um jogo de encaixe com 4 peças e botões que acendem LEDs; Um lado com sensores ultrassônicos, onde o LED pisca e a pessoa deve passar a mão no sensor correspondente; Um jogo da memória para acertar a sequência de luzes e sons; e um piano com botões que tocam as notas musicais e acendem LEDs.
          </p>
        </section>

        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8">
          <img className="w-full sm:w-auto sm:h-80" src={guia2} alt="imagens do projeto da home" />

          <p className="text-center text-base leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-0 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-5 lg:ml-6">
            <span className="font-bold font-poppins">Instruções de Uso:</span> <br /> <br />
            No jogo de encaixe, coloque as peças nos lugares corretos e pressione o botão para acender o LED. No sensor de movimento, passe a mão sobre o sensor correspondente quando o LED piscar. No jogo da memória, memorize e repita a sequência de botões que piscam. No piano, pressione os botões para tocar as notas musicais e acender os LEDs.
          </p>
        </section>

        {/* Adicionando a seção do vídeo do jogo abaixo de guia2 */}
        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8">
          <video
            className="w-full sm:w-auto sm:h-80"  // Limitando a altura do vídeo no mobile
            controls
            src={videoJogo}
          />
        </section>

      </main>

      <footer className="flex flex-col items-center justify-center p-4 font-inter text-texto w-full h-auto bg-navbar-footer mt-16 gap-4 sm:flex-row sm:gap-8 sm:h-24">
        <p className="text-center sm:text-left">
          Fale conosco:
        </p>

        <div className="flex gap-4">
          <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=tcc.sensor2024@gmail.com"><img className="h-6 w-auto" src={gmail} alt="gmail logo" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5511974517730"><img className="h-6 w-auto" src={whatsapp} alt="whatsapp logo" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sensor_2024/"><img className="h-6 w-auto" src={instagram} alt="instagram logo" /></a>
        </div>
      </footer>
    </div>
  );
}
