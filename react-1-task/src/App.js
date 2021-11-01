
import './App.css';
import { Header } from './components/Header';
import NavContainer from './components/Nav/NavContainer';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <NavContainer/>
      <Footer/>
    </div>
  );
}

export default App;
