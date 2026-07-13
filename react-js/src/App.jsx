import ProductList from "./Productlist";
import Header2 from "./Header2";
import Hero2 from "./Hero2";
import Footer2 from "./Footer2";

function App() {
  const products = [
    {
      name: "Laptop",
      price: 700,
      obraz: "laptop.png"
    },
    {
      name: "Phone",
      price: 500,
      obraz: "telefon.png"
    },
    {
      name: "Headphone",
      price:  300,
      obraz: "sluchawki.png"

    }
  ];

  return(
    <>
    <Header2/>
    <Hero2/>
    <ProductList products={products}/>
    <Footer2></Footer2>
    </>
  );
}
export default App;