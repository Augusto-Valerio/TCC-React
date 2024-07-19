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

      <div className="flex justify-center items-center ">
        <main className="flex flex-col items-center">
        <section className="text-texto flex flex-col items-center w-4/5 h-[741px] mt-8" >
            <h1 className="font-titulo font-bold text-titulo mt-16 mb-8 text-4xl leading-10 text-center">
              Bem-vindo ao Projeto <br /> <span className="text-titulo2" >Cubo Multissensorial</span>
            </h1>

            <img src={imagens} alt="imagens do projeto da home" />

            <p className="px-28 text-xl leading-6 mt-8 border border-rounded  rounded-lg w-1/2  px-3 py-2 text-justify">
              Nosso projeto, desenvolvido como Trabalho de Conclusão de Curso, é um brinquedo comunicador multisensorial em formato de cubo, criado para apoiar o desenvolvimento pessoal e ajudar pessoas com transtornos mentais. Utilizando a tecnologia Arduino, nosso cubo integra luzes, som e interações táteis para proporcionar uma experiência terapêutica e educativa.
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

        
        <a href="#"><img className="px-3" src={gmail} alt="gmail logo" /></a>

        <a href="#"><img src={instagram} alt="instagram logo"/></a>
      </footer>
    </div>
  );
}

