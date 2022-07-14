import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cards from './Components/Cards';
import Score from './Components/Score';

function App() {
	return (
		<main className="App">
			<nav className="headerContainer">
				<Header />
			</nav>
			<div className="container">
				<Cards />
			</div>
			<Footer />
		</main>
	);
}

export default App;
