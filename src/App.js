import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
