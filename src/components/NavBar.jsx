import { Link, useLocation } from 'react-router-dom';
import Sensor from '../assets/Sensor.svg';

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="bg-navbar-footer flex justify-between items-center w-full h-16 font-inter">
      <Link to="/">
        <img src={Sensor} alt="Logo" className="ml-12" />
      </Link>
      
      <ul className="text-texto flex list-none gap-20 mx-auto ">

        <li>
          <Link to="/projeto" className={`hover:font-bold hover:underline ${location.pathname === '/projeto' ? 'text-navSelect underline' : ''}`} >PROJETO</Link>
        </li>

        <li>
          <Link to="/" className="hover:font-bold hover:underline">TECNOLOGIA</Link>
        </li>

        <li>
          <Link to="/" className="hover:font-bold hover:underline">REFERÊNCIAS BIBLIOGRÁFICAS</Link>
        </li>

        <li>
          <Link to="/" className="hover:font-bold hover:underline mr-28">SOBRE NÓS</Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
