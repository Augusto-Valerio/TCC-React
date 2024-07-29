import imagens from '../assets/imagens.png';
import gmail from '../assets/gmail.svg';
import instagram from '../assets/instagram.svg';

/* */
export default function Home() {
  return (
     
    <div className="font-body bg-body">  
      <div className="flex justify-center items-center min-h-screen ">
        <main className="">
        <section className="flex items-start space-x-8" >
            

            <img className=' h-80 w-auto mt-20 mb-28 ml-20 mr-32' src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-1/2 px-4 pt-5 pb-11  text-texto mt-20 font-inter ">
            <span className='font-bold font-poppins'>Objetivo do Projeto:</span> <br /> <br /> O Cubo Multisensorial tem como objetivo <br />oferecer um recurso inovador para a terapia de <br /> pessoas com transtornos mentais. Através de <br /> estímulos visuais, auditivos e táteis, o cubo <br /> busca promover o desenvolvimento cognitivo,<br /> emocional e social dos usuários, contribuindo <br /> para o seu bem-estar e qualidade de vida.
            </p>
          </section>


        <section className="flex items-start space-x-8" >
            

            <img className=' h-80 w-auto  mb-28 ml-20 mr-32' src={imagens} alt="imagens do projeto da home" />

            <p className="text-center text-xl leading-12 border border-rounded rounded-lg w-1/2 px-4 pt-5 pb-4  text-texto font-inter ">
            <span className='font-bold font-poppins'>Importância do Brinquedo Multissensorial:</span> <br /> <br /> Brinquedos multissensoriais são ferramentas <br /> valiosas na terapia de indivíduos com <br /> transtornos mentais, pois estimulam diferentes <br /> sentidos simultaneamente. Essa abordagem <br /> pode ajudar a melhorar a concentração, a <br /> comunicação e as habilidades motoras, além <br /> de proporcionar momentos de relaxamento e <br />diversão.
            </p>
          </section>

          


        </main>
      </div>
      


      <footer className="flex items-center justify-center text-texto w-full h-24 bg-navbar-footer gap-8  font-inter" /* #DCDCE1 texto do footer.*/  /* #1A1A1E cor de fundo do footer */>
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

