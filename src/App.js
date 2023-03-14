import './App.css';
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landingpage from './pages/landing-page';
import ForumPage from './pages/forum';

function App() {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Ur Safety Fence</title>
          <link rel="canonical" href="" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/forum" element={<ForumPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
