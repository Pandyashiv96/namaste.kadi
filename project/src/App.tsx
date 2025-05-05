import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';
import Suggestions from './pages/Suggestions';
import Instagram from './pages/Instagram';

const App: React.FC = () => {
  const pathname = window.location.pathname;
  
  // Simple client-side routing
  const renderPage = () => {
    switch (pathname) {
      case '/videos':
        return <Videos />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      case '/suggestions':
        return <Suggestions />;
      case '/instagram':
        return <Instagram />;
      default:
        return <Home />;
    }
  };
  
  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
};

export default App;