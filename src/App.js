import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Resume from './Components/Resume'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/welcome" element={ <Home /> } />
        <Route path="/resume" element={ <Resume />} />
        <Route path="/about" element={<Home/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
