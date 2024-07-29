import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projeto from './components/Projeto';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
