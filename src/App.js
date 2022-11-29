import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Education from "./Components/Education";
import Projects from './Components/Projects';
import Courses from './Components/Courses';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="resume" element={ <Resume />} >
          <Route path="education" element={ <Education /> } />
          <Route path="projects" element={ <Projects />} />
          <Route path="courses" element={<Courses />} /> 
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
