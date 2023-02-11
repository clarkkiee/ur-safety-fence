import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './pages/landing-page';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
