
import About from "./modules/About/about";
import Advantage from "./modules/Advantage/advantage";
import Header from "./modules/Header/header";
import Hero from "./modules/Hero/hero";
import Integration from "./modules/Integration/integration";
import Merchants from "./modules/Merchants/merchats";
import Products from "./modules/Products/products";
import Request from "./modules/Request/request";

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
      <Request/>
      <Merchants/>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
