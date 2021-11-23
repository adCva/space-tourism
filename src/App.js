import './App.css';
import { HashRouter, Routes, Route}  from 'react-router-dom';

// Pages.
import Home from './Pages/Home';
import Destination from "./Pages/Destination";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";




function App() {
  return (
    <HashRouter className="App">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/destination" element={<Destination />}/>
        <Route path="/crew" element={<Crew />}/>
        <Route path="/technology" element={<Technology />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;