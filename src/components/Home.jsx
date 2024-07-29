import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';

/* */
export default function Home() {
  return (
  
    <div className="font-inter bg-body">  
      
      <div className="flex justify-center items-center ">
        <main className="flex flex-col items-center">
        <section className="text-texto flex flex-col items-center w-4/5 h-[741px] mt-8" >
            <h1 className="font-poppins font-bold text-titulo mt-8 mb-8 text-4xl leading-10 text-center">
              Bem-vindo ao Projeto <br /> <span className="text-titulo2" >Cubo Multissensorial</span>
            </h1>

            <img className='w-1/2' src={imagens} alt="imagens do projeto da home" />


            <p className=" text-center  text-xl leading-6 mt-8 border border-rounded  rounded-lg w-1/2  px-3 pt-4 pb-4  text-justify text-texto">
              Nosso projeto, desenvolvido como Trabalho de Conclusão de Curso, é um  brinquedo comunicador multisensorial em formato de cubo, criado para  apoiar o desenvolvimento pessoal e ajudar pessoas com transtornos  mentais. Utilizando a tecnologia Arduino, nosso cubo integra luzes, som e  interações táteis para proporcionar uma experiência terapêutica e  educativa.
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

        
        <a href="#"><img className="h-4 w-auto" src={gmail} alt="gmail logo" /></a>

        <a href="#"><img className="h-4 w-auto" src={instagram} alt="instagram logo"/></a>
      </footer>
    </div>
  );
}

