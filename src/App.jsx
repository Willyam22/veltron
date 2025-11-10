import HeaderBar from './headbar';
import HeroSection from './herosection';
import ProductSection from './productsection';
import ProfileSection from './profilesection';
import Footer from './footer';
import './App.css'


function App() {
  return (
    <div className="bg-white w-full min-h-screen">
      <HeaderBar />
      <HeroSection/>
      <ProductSection/>
      <Footer/>
    </div>
  );
}

export default App
