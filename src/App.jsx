import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projeto from './components/Projeto';
import NavBar from './components/NavBar';
import Tecnologia from './components/Tecnologia'
import Referencias from './components/Referencias'
import Sobre from './components/Sobre'
import './style.css';

const App = () => {
  return (

    
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path='/tecnologia' element={<Tecnologia />} />
          <Route path='/referencias' element={<Referencias />} />
          <Route path='/sobre' element={<Sobre />} />
          
        </Routes>
      </main>
    </Router>
  );
};

export default App;
