import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Product from './components/Product/Product';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Static/NotFound';
import ThankYou from './components/Static/ThankYou';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/" element={<Product/>} ></Route>
      <Route path="/about" element={<About/> }></Route>
      <Route path="/thankyou" element={<ThankYou/> }></Route>
      <Route path="*" element={<NotFound/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
