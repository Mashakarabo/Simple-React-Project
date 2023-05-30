import './App.css';

import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/ContactUs';
import Login from './pages/Login';
import Navbar from './Navbar';
import Navigation from './pages/navigation';



function App() {
  
  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Login' element={<Login/>} />

        
      </Routes>
     
      
      
      <Navigation />
    </div>
    
    
    
  );
}

export default App;
