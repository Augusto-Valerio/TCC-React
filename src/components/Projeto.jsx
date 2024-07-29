import Sensor from '../assets/Sensor.svg';
import User from '../assets/User.svg';
import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';

/* */
export default function Home() {
  return (
    
      
    
    <div className="font-body bg-body">  
      <nav className="bg-navbar-footer flex justify-between items-center w-full h-16">
        <img className="ml-12" src= {Sensor} alt="Logo" />
        <ul className="text-texto flex list-none gap-20 mx-auto"> 
          <li><a className="hover:font-bold" href="#">PROJETO</a></li>
          <li><a className="hover:font-bold" href="#">TECNOLOGIA</a></li>
          <li><a className="hover:font-bold" href="#">REFERÊNCIAS BIBLIOGRÁFICAS</a></li>
          <li><a className="hover:font-bold" href="#">SOBRE NÓS</a></li> 
        </ul>
        <img className="mr-12"src={User} alt="usuario" />
      </nav>

      <div className="flex justify-center items-center min-h-screen ">
        <main className="">
        <section className="flex items-start space-x-8" >
            

            <img className=' h-80 w-auto mt-20 mb-28 ml-20 mr-32' src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-2xl leading-12 border border-rounded rounded-lg w-1/2 px-3 py-4 text-texto mt-20 font-inter ">
            <span className='font-bold font-poppins'>Objetivo do Projeto:</span> <br /> <br /> O Cubo Multisensorial tem como objetivo <br />oferecer um recurso inovador para a terapia de <br /> pessoas com transtornos mentais. Através de <br /> estímulos visuais, auditivos e táteis, o cubo <br /> busca promover o desenvolvimento cognitivo,<br /> emocional e social dos usuários, contribuindo <br /> para o seu bem-estar e qualidade de vida.
            </p>
          </section>


        <section className="flex items-start space-x-8" >
            

            <img className=' h-80 w-auto  mb-28 ml-20 mr-32' src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-2xl leading-12 border border-rounded rounded-lg w-1/2 px-4   text-texto font-inter ">
            <span className='font-bold font-poppins'>Importância do Brinquedo Multissensorial:</span> <br /> <br /> Brinquedos multissensoriais são ferramentas <br /> valiosas na terapia de indivíduos com <br /> transtornos mentais, pois estimulam diferentes <br /> sentidos simultaneamente. Essa abordagem <br /> pode ajudar a melhorar a concentração, a <br /> comunicação e as habilidades motoras, além <br /> de proporcionar momentos de relaxamento e <br />diversão.
            </p>
          </section>

          


        </main>
      </div>
      


      <footer className="flex items-center justify-center text-texto w-full h-24 bg-navbar-footer mt-16 gap-8 " /* #DCDCE1 texto do footer.*/  /* #1A1A1E cor de fundo do footer */>
        <p>
          Fale conosco: 
        </p>

        <p>Email: [seuemail@exemplo.com] </p>

        <p>Telefone: (00) 0000-0000</p>

        
        <a href="#"><img className="h-4 w-auto " src={gmail} alt="gmail logo" /></a>

        <a href="#"><img className='h-4 w-auto ' src={instagram} alt="instagram logo"/></a>
      </footer>
    </div>
  );
}

