import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sensor from '../assets/Sensor.svg';
import unasp from '../assets/unasp.svg';
import projeto from '../assets/projeto.svg';
import referencias from '../assets/referencias.svg';
import sobre from '../assets/sobre.svg';
import tecnologia from '../assets/tecnologia.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeSidebar = () => setIsSidebarOpen(false);

  // Use effect to close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Adjust this value based on your breakpoint for desktop
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-navbar-footer flex justify-between items-center w-full h-16 font-inter fixed top-0 left-0 right-0 z-50">
        {/* Menu Hamburger */}
        <div className="block md:hidden ml-4" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes className="text-titulo text-3xl" /> : <FaBars className="text-titulo text-3xl" />}
        </div>

        {/* Logo no Mobile (Centralizado) */}
        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 md:hidden" onClick={closeSidebar}>
          <img src={Sensor} alt="Logo" className="w-16" />
        </Link>

        {/* Logo no Desktop */}
        <Link to="/" className="hidden md:flex ml-12 items-center">
          <img src={Sensor} alt="Logo" className="w-20" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-texto list-none gap-20 mx-auto">
          <li>
            <Link to="/projeto" className={`hover:text-titulo2 hover:underline ${location.pathname === '/projeto' ? 'text-navSelect underline' : ''}`}>GUIA</Link>
          </li>
          <li>
            <Link to="/tecnologia" className={`hover:text-titulo2 hover:underline ${location.pathname === '/tecnologia' ? 'text-navSelect underline' : ''}`}>TECNOLOGIA</Link>
          </li>
          <li>
            <Link to="/referencias" className={`hover:text-titulo2 hover:underline ${location.pathname === '/referencias' ? 'text-navSelect underline' : ''}`}>REFERÊNCIAS BIBLIOGRÁFICAS</Link>
          </li>
          <li>
            <Link to="/sobre" className={`hover:text-titulo2 hover:underline ${location.pathname === '/sobre' ? 'text-navSelect underline' : ''}`}>SOBRE NÓS</Link>
          </li>
        </ul>

        {/* Logo UNASP no Mobile e Desktop */}
        <img className="mr-4 md:mr-12 md:w-10 w-10 md:block absolute right-1 md:relative md:right-auto ml-4" src={unasp} alt="Logo UNASP" />
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-navbar-footer text-texto transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex justify-between items-center p-4">
          <Link to="/" onClick={closeSidebar}>
            <img src={Sensor} alt="Logo" className="w-16"/>
          </Link>
          <FaTimes className="text-titulo text-3xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className="flex flex-col items-start space-y-4 mt-16 pl-4 font-inter">
          {[
            { to: '/projeto', img: projeto, text: 'GUIA' },
            { to: '/tecnologia', img: tecnologia, text: 'TECNOLOGIA' },
            { to: '/referencias', img: referencias, text: 'REFERÊNCIAS BIBLIOGRÁFICAS' },
            { to: '/sobre', img: sobre, text: 'SOBRE NÓS' },
          ].map(({ to, img, text }) => (
            <li key={to} className="flex items-center w-full border-b border-border-separation pb-2 border-rounded">
              <Link to={to} className={`flex items-center ${location.pathname === to ? 'text-navSelect underline' : ''}`} onClick={closeSidebar}>
                <img src={img} alt={text} className="w-6 h-6 mr-2" />
                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
