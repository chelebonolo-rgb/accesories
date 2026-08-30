import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.title =
      currentPage === 'home'
        ? 'Chele Accessories Department'
        : 'Chele Accessories Department | Contact';
  }, [currentPage]);

  return (
    <div className="app-shell">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? <Home /> : <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
