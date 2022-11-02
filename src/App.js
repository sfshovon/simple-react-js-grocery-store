import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import About from './components/About';
import ThankYou from './components/ThankYou';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>} ></Route>
      <Route path="/about" element={<About/> }></Route>
      <Route path="/thankyou" element={<ThankYou/> }></Route>
      <Route path="*" element={<NotFound/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
