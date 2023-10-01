import styles from "./style";
import {
  Navbar,
  Hero,
  CharacterCard,
  Welcome,
  WelcomeNext,
  Option,
  Ready,
  FireDetection,
  PhoneCall, 
  Cam,
  CamModel
} from "./components";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/card" element={<CharacterCard />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/welcome-nxt" element={<WelcomeNext/> } />
          <Route path="/option" element={<Option/> } />
          <Route path="/ready" element={<Ready/> }/>
          <Route path="/fire-detect" element={<FireDetection/> }/>
          <Route path="/phone-call" element={<PhoneCall/> }/>
          <Route path="/nv-cam" element={<  Cam /> } />
          <Route path="/model-cam" element={<CamModel />} />
        </Routes>
    </Router>
  );
};

export default App;
