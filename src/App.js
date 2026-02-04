import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';

import Home from './pages/Home';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import ChatWindow from './pages/ChatWindow';

import Maintenance from './pages/Maintenance';
import Page404 from './pages/Page404';

function App() {

  const isMaintenance = false;

  if (isMaintenance) {

    return <Maintenance />;
  }

  return (

    <Router>

      <Header />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/sss' element={<FAQPage />} />
        <Route exact path='/contact' element={<ContactPage />} />
        <Route exact path='/about' element={<AboutPage />} />

        <Route exact path='/maintenance' element={<Maintenance />} />
        <Route path='*' element={<Page404 />} />

      </Routes>

      <ChatWindow />

      <Footer />

    </Router>
  
  );
};

export default App;