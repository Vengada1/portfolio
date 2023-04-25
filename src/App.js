import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contacts/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;