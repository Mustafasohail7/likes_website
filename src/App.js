import './App.css';

import Header from './components/Header'
import Hero from './components/Hero'
import PriceList from './components/PriceList';
import Features from './components/Features';
import FAQ from './components/FAQ';
import FlashCard from './components/FlashCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PriceList />
      <Features />
      <FAQ />
      <FlashCard />
    </div>
  );
}

export default App;
