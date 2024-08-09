import { Link, useLocation } from 'react-router-dom';
import Sensor from '../assets/Sensor.svg';
import unasp from '../assets/unasp.svg';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-navbar-footer flex justify-between items-center w-full h-16 font-inter fixed">
      <Link to="/">
        <img src={Sensor} alt="Logo" className="ml-12" />
      </Link>

      
      
      <ul className="text-texto flex list-none gap-20 mx-auto ">

        <li>
          <Link to="/projeto" className={` hover:text-titulo2 hover:underline  ${location.pathname === '/projeto' ? 'text-navSelect underline' : ''}`} >PROJETO</Link>
        </li>

        <li>
        <Link to="/tecnologia" className={`hover:text-titulo2 hover:underline  ${location.pathname === '/tecnologia' ? 'text-navSelect underline' : ''}`} >TECNOLOGIA</Link>
        </li>

        <li>
        <Link to="/referencias" className={`hover:text-titulo2 hover:underline  ${location.pathname === '/referencias' ? 'text-navSelect underline' : ''}`} >REFERÊNCIAS BIBLIOGRÁFICAS</Link>      
        </li>

        <li>
        <Link to="/sobre" className={`hover:text-titulo2 hover:underline  mr-6 ${location.pathname === '/sobre' ? 'text-navSelect underline' : ''}`} >SOBRE NÓS</Link>  
        </li>


      </ul>

      <img className='mr-12' src={unasp} alt="Logo UNASP" />
    </nav>
  );
};

export default NavBar;
