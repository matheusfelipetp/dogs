import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes';
import { UserContextProvider } from './context/UserContext';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserContextProvider>
          <Header />
          <RoutesApp />
          <Footer />
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
