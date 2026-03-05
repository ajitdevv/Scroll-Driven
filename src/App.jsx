import Nav from "./componentsprentes/nav";
import Hero from "./pages/Hero";
import Home from "./pages/Home";

function App() {
  return (
      <div className="bg-[url('/Homebg.png')]  top-0" >
        <Nav />
        <Home/>
        <Hero />
      </div>
  );
}

export default App;
