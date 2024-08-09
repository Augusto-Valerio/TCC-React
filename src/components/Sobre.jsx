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

export default function Home() {
  return (
    <div className="font-body bg-body">
      <div className="flex justify-center items-center min-h-screen ">
        <main className="">

          <h1 className="font-poppins font-bold text-titulo mb-8 mt-28 text-5xl leading-10 text-center">
            Sobre nós
          </h1>

          <section className="flex justify-center items-center space-x-8">
          <div className="flex flex-col items-center space-y-4">
            <img className="h-80 w-auto mt-20" src={Ramalho} alt="imagens do projeto da home" />
            <h2 className='font-poppins  text-titulo mb-8 mt-28 text-3xl leading-10 text-center'>João Vitor Ramalho</h2>
            <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
              <div className="flex items-center justify-center space-x-2">
                <img  src={linkedin} alt="logo linkedin" />
                <span>João Vitor </span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <img src={insta2} alt="logo instagram" />
                <span>@jv_ramalho_</span>
              </div>
            </p>
          </div>


          <div className="flex flex-col items-center space-y-4">
            <img className="h-80 w-auto mt-20" src={Valerio} alt="imagens do projeto da home" />
            <h2 className='font-poppins  text-titulo mb-8 mt-28 text-3xl leading-10 text-center'>Augusto Valerio</h2>
            <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
              <div className="flex items-center justify-center space-x-2">
                <img src={linkedin} alt="logo linkedin" />
                <span>Augusto Valerio</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <img src={insta2} alt="logo instagram" />
                <span>@a.valerioo_</span>
              </div>
            </p>
          </div>


          <div className="flex flex-col items-center space-y-4">
            <img className="h-80 w-auto mt-20" src={Gomes} alt="imagens do projeto da home" />
            <h2 className='font-poppins  text-titulo mb-8 mt-28 text-3xl leading-10 text-center'>Guilherme Gomes</h2>
            <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
              <div className="flex items-center justify-center space-x-2">
                <img src={linkedin} alt="logo linkedin" />
                <span>Guilherme Santos Gomes</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <img src={insta2} alt="logo instagram" />
                <span>@_gomsxz.77</span>
              </div>
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <img className="h-80 w-auto mt-20" src={Jonas} alt="imagens do projeto da home" />
            <h2 className='font-poppins  text-titulo mb-8 mt-28 text-3xl leading-10 text-center'>Jonas Esteves</h2>
            <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-full px-4 pt-5 pb-11 text-texto font-inter">
              <div className="flex items-center justify-center space-x-2">
                <img src={linkedin} alt="logo linkedin" />
                <span>Jonas Esteves</span>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <img src={insta2} alt="logo instagram" />
                <span>@manojonas._</span>
              </div>
            </p>
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
