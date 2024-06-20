import { Content } from "./Components/Content";
import { Footer } from "./Components/Footer";
import { Hero } from "./Components/Hero";
import { Navigation } from "./Components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
