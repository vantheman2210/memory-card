import './App.css';
import Header from './Components/Header'; 
import Footer from './Components/Footer';
import Cards from './Components/Cards';

function App() {
  return (
    <main className="App">
      <Header />
      <div className='container'>
      <Cards />
      </div>
      <Footer />
    </main>
  );
}

export default App;
