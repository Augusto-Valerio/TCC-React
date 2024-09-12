import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

export default function Referencias() {
  return (
    <div className="font-body bg-body">
      <div className="flex justify-center items-center min-h-screen">
        <main className="w-full px-4 sm:mt-8">

          <h1 className="font-poppins font-bold text-titulo mb-8 mt-20 text-3xl leading-tight text-center sm:text-4xl sm:mt-28">
            Referências bibliográficas
          </h1>

          <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center space-y-4 ">
              <img className="w-2/3 h-auto mt-8 sm:w-1/2 sm:mt-20 sm:ml-52 " src={img1} alt="Referência 1" />
              <p className="text-center text-base leading-7 border border-rounded rounded-lg px-2 pt-5 pb-8 text-texto font-inter w-2/3 sm:w-1/2 sm:text-xl sm:leading-12 sm:ml-52">
                Otimizar o tratamento de pessoas com transtornos do neurodesenvolvimento e aprendizagem em todo o estado <br />
                <a target='_blank' className="text-navSelect hover:underline" href="https://saude.mg.gov.br/assistenciafarmaceutica/story/19709-parques-multissensoriaisvaootimizar-o-tratamento-de-pessoas-com-transtornos-do-neurodesenvolvimento-e-aprendizagem-em-todo-o-estado">Acesse aqui</a>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <img className="w-2/3 h-auto mt-8 sm:mt-20 sm:w-1/2 sm:mr-52" src={img2} alt="Referência 2" />
              <p className="text-center text-base leading-7 border border-rounded rounded-lg px-4 pt-5 pb-8 text-texto font-inter w-2/3 sm:w-1/2 sm:mr-52 sm:text-xl sm:leading-12 sm:py-10">
                A Importância dos Brinquedos Sensoriais Para o Desenvolvimento dos Pequenos <br />
                <a target='_blank' className="text-navSelect hover:underline" href="https://colegiopequenoser.com.br/2022/08/23/a-importancia-dos-brinquedos-sensoriais-para-o-desenvolvimento-dos-pequenos/#:~:text=Os%20brinquedos%20sensoriais%20s%C3%A3o%20todos,ou%20coletando%20elementos%20da%20natureza.">Acesse aqui</a>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 ">
              <img className="w-2/3 h-auto mt-8 sm:w-1/2 sm:ml-52" src={img3} alt="Referência 3" />
              <p className="text-center text-base sm:text-xl leading-7 sm:leading-12 border border-rounded rounded-lg px-4 pt-5 pb-8 text-texto font-inter w-2/3 sm:w-1/2 sm:ml-52">
                Brinquedos sensoriais: o que são, para que servem e quais os tipos <br />
                <a target='_blank' className="text-navSelect hover:underline" href="https://marjan.com.br/blog/brinquedos-sensoriais-o-que-sao-para-que-servem-e-quais-os-tipos/">Acesse aqui</a>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 ">
              <img className="w-2/3 h-auto mt-8 sm:w-1/2 sm:mr-52" src={img4} alt="Referência 4" />
              <p className="text-center text-base sm:text-xl leading-7 sm:leading-12 border border-rounded rounded-lg px-4 pt-5 pb-8 text-texto font-inter w-2/3 sm:w-1/2 sm:mr-52 ">
                Tecnologia no autismo: como ela auxilia no desenvolvimento de pessoas autistas? <br />
                <a target='_blank' className="text-navSelect hover:underline" href="https://genialcare.com.br/blog/tecnologia-no-autismo/#:~:text=da%20inclus%C3%A3o%20educacional.-,Os%20benef%C3%ADcios%20da%20tecnologia%20no%20autismo,planejamento%20e%20na%20interven%C3%A7%C3%A3o%20terap%C3%AAutica.">Acesse aqui</a>
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="flex flex-col sm:flex-row items-center justify-center text-texto w-full h-auto sm:h-24 bg-navbar-footer mt-16 gap-4 sm:gap-8 p-4 font-inter">
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
