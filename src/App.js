
import About from "./modules/About/about";
import Advantage from "./modules/Advantage/advantage";
import Header from "./modules/Header/header";
import Hero from "./modules/Hero/hero";
import Integration from "./modules/Integration/integration";
import Products from "./modules/Products/products";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Integration/>
      <Products/>
      <About/>
      <Advantage/>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
