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

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height:100%,
  overflow-x: hidden;
`

const Wrapper =styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 99%, 0 100%);
`

function App(){
  return(
    <ThemeProvider theme={darkTheme}>
      <Router>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Education/>
          <Skills/>
          <Exprience/>
          <Project/>
          <Certificates/>
          <Contact/>
        </Wrapper>
      </Body>
      </Router>
    </ThemeProvider>
  )
}
export default App;
