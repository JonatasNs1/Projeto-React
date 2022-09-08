import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/pages/layout/Container';



function App() {
  return (
    <Router> 
      <div>
        <Link to="/"> Home</Link>
        <Link to="/Company"> Empresa</Link>
        <Link to="/contact"> Contato</Link>
        <Link to="/newProject"> Novo Projeto</Link>
      </div>
    <Container customClass="min-height">
        <Routes>
        
              <Route
                exact path='/' 
                element={<Home/>} 
                ></Route>
              <Route
                exact path='/company' 
                element={<Company/>} 
              >
              </Route>
              <Route
                exact path='/contact' 
                element={<Contact/>} 
              >
              </Route>
              <Route
                exact path='/newProject' 
                element={<NewProject/>} 
              >
              </Route>    
        </Routes>
    </Container>
      <p>Footer</p>
    </Router>

  );
}

export default App;
