import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';
import whatsapp from '../assets/whatsapp.svg';
import linkedin from '../assets/linkedin.svg';
import insta2 from '../assets/insta2.svg';
import Gomes from '../assets/Gomes.png';
import Jonas from '../assets/Jonas.png';
import Valerio from '../assets/Valerio.png';
import Ramalho from '../assets/Ramalho.png';


export default function Sobre() {
  return (
    <div className="font-body bg-body">
      <div className="flex justify-center items-center min-h-screen px-4">
        <main className="w-full max-w-7xl mx-auto sm:mb-36">
          <h1 className="font-poppins font-bold text-titulo mb-8 mt-20 text-3xl leading-tight text-center sm:text-5xl sm:mb-40 sm:mt-36 md:text-4xl">
            Sobre nós
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagens da linha superior */}
            <div className="flex flex-col items-center space-y-4">
              <img className=" h-auto sm:w-1/2" src={Ramalho} alt="João Vitor Ramalho" />
              <h2 className="font-poppins text-titulo mb-4 text-2xl sm:text-3xl text-center">João Vitor Ramalho</h2>
              <p className="text-center text-base leading-7 border border-rounded rounded-lg w-60 px-4 pt-5 pb-8 text-texto font-inter sm:leading-12 sm:text-xl sm:w-72">
                <div className="flex items-center space-x-2 ml-8">
                  <img className="h-5 w-auto" src={linkedin} alt="linkedin logo" />
                  <span>João Vitor</span>
                </div>
                <div className="flex items-center space-x-2 mt-2 ml-8">
                  <img className="h-5 w-auto" src={insta2} alt="instagram logo" />
                  <span>@jv_ramalho_</span>
                </div>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <img className=" h-auto sm:w-1/2" src={Valerio} alt="Augusto Valerio" />
              <h2 className="font-poppins text-titulo mb-4 text-2xl sm:text-3xl text-center">Augusto Valerio</h2>
              <p className="text-center text-base leading-7 border border-rounded rounded-lg w-60 px-4 pt-5 pb-8 text-texto font-inter sm:leading-12 sm:text-xl sm:w-72">
                <div className="flex items-center ml-8 space-x-2">
                  <img className="h-5 w-auto" src={linkedin} alt="linkedin logo" />
                  <span>Augusto Valerio</span>
                </div>
                <div className="flex items-center ml-8 space-x-2 mt-2">
                  <img className="h-5 w-auto" src={insta2} alt="instagram logo" />
                  <span>@a.valerioo_</span>
                </div>
              </p>
            </div>

            {/* Imagens da linha inferior */}
            <div className="flex flex-col items-center space-y-4">
              <img className=" h-auto sm:w-1/2" src={Gomes} alt="Guilherme Gomes" />
              <h2 className="font-poppins text-titulo mb-4 text-2xl text-center sm:text-3xl">Guilherme Gomes</h2>
              <p className="text-center text-base leading-7 border border-rounded rounded-lg w-60 px-4 pt-5 pb-8 text-texto font-inter sm:leading-12 sm:text-xl sm:w-72">
                <div className="flex items-center ml-8 space-x-2">
                  <img className="h-5 w-auto" src={linkedin} alt="linkedin logo" />
                  <span>Guilherme Gomes</span>
                </div>
                <div className="flex items-center ml-8 space-x-2 mt-2">
                  <img className="h-5 w-auto" src={insta2} alt="instagram logo" />
                  <span>@_gomsxz.77</span>
                </div>
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <img className=" h-auto sm:w-1/2" src={Jonas} alt="Jonas Esteves" />
              <h2 className="font-poppins text-titulo mb-4 text-2xl sm:text-3xl text-center">Jonas Esteves</h2>
              <p className="text-center text-base leading-7 border border-rounded rounded-lg w-60 px-4 pt-5 pb-8 text-texto font-inter sm:leading-12 sm:text-xl sm:w-72">
                <div className="flex items-center ml-8 space-x-2">
                  <img className="h-5 w-auto" src={linkedin} alt="linkedin logo" />
                  <span>Jonas Esteves</span>
                </div>
                <div className="flex items-center ml-8 space-x-2 mt-2">
                  <img className="h-5 w-auto" src={insta2} alt="instagram logo" />
                  <span>@manojonas._</span>
                </div>
              </p>
            </div>
          </section>
        </main>
      </div>

      <footer className="flex flex-col items-center justify-center text-texto w-full h-auto bg-navbar-footer mt-16 gap-4 p-4 font-inter sm:flex-row sm:gap-8 sm:h-24">
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
