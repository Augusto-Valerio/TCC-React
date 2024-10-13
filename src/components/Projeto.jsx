import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import Objetivo from '../assets/Objetivo.jpg';
import guia1 from '../assets/guia1.jpg';
import guia2 from '../assets/guia2.jpg';

export default function Projeto() {
  return (
    <div className="font-body bg-body min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col items-center space-y-16 w-full mt-24 sm:mt-2">

        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8 sm:mt-36">
          <img className="w-full sm:w-auto sm:h-80" src={guia1} alt="imagens do projeto da home" />

          <p className="text-center text-base leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-0 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-8">
            <span className="font-bold font-poppins">Descrição Geral do Cubo Multissensorial: </span> <br /> <br />
            O cubo possui 4 lados interativos: um jogo de encaixe com 4 peças e botões que acendem LEDs; Um lado com sensores ultrassônicos, onde o LED pisca e a pessoa deve passar a mão no sensor correspondente; Um jogo da memória com para acertar a sequência de luzes e sons; e um piano com botões que tocam as notas musicais e acendem LEDs.</p>
        </section>

        <section className="flex flex-col items-center w-full px-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-8">
          <img className="w-full sm:w-auto sm:h-80" src={guia2} alt="imagens do projeto da home" />

          <p className="text-center text-base leading-7 border border-rounded rounded-lg w-full px-4 pt-5 pb-8 text-texto mt-8 font-inter sm:mt-0 sm:text-xl sm:leading-12 sm:w-3/12 md:px-2 md:py-5">
            <span className="font-bold font-poppins">Instruções de Uso:</span> <br /> <br />
            No jogo de encaixe, coloque as peças nos lugares corretos e pressione o botão para acender o LED. No sensor de movimento, passe a mão sobre o sensor correspondente quando o LED piscar. No jogo da memória, memorize e repita a sequência de botões que piscam. No piano, pressione os botões para tocar as notas musicais e acender os LEDs.          </p>
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
