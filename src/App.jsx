import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <RoutesApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
