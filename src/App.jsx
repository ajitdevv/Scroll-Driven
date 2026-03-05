import Nav from "./componentsprentes/nav";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Home from "./pages/Home";

function App() {
  return (
      <div className="bg-[url('/Homebg.png')]  top-0" >
        <Nav />
        <Home/>
        <Hero />
        <Footer />
      </div>
  );
}

export default App;
