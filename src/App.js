import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Resume from './Components/Resume';
import Education from "./Components/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="resume" element={ <Resume />} >
          <Route path="education" element={ <Education /> } />
          <Route path="projects" element={ <Education />} />
          <Route path="courses" element={<Education/>} /> 
        </Route>
        <Route path="about" element={<Home/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
