import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Contact from './component/Contact';
import Products from './component/Products';
import Footer from './Footer';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage'
import Edusphere from './component/Products/Edusphere';
import Omnicore from './component/Products/Omnicore';
import Genesis from './component/Products/Genesis-Program';
import Eduvision from './component/Products/Eduvision';
import Aboutus from './component/About';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<Aboutus />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Products' element={<Products />} />
        <Route path='Products/Edusphere' element={<Edusphere />} />
        <Route path='Products/Omnicore' element={<Omnicore />} />
        <Route path='Products/Genesis-Program' element={<Genesis />} />
        <Route path='Products/Eduvision' element={<Eduvision />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
