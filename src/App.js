import Header from "./modules/Header/header";
import Hero from "./modules/Hero/hero";
import Integration from "./modules/Integration/intergration";
import Products from "./modules/Products/products";

function App() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Integration/>
      <Products/>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
