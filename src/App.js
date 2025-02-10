import styled,{ThemeProvider} from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
import {darkTheme} from './utils/Themes';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Exprience from './components/Exprience';
import Hero from './components/HeroSection';
import Education from './components/Education';
import Project from './components/Projects';
import './App.css';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App(){
  return(
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <div className='Body'>
        <Hero/>
        <div className='Wrapper'>
          <Education/>
          <Skills/>
          <Exprience/>
          <Project/>
          <Certificates/>
          <Contact/>
        </div>
      </div>
      </Router>
    </ThemeProvider>
  )
}
export default App;
