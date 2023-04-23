import React, {useState} from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import data from "./data.json"
import Products from "./Components/Products/Products";


function App() {


  const [products , setProducts] = useState(data)


  return (
    <div className="layout">


      <Header/>
      <main>
        <div className="wrapper">
          <Products products = {products} />
          <div className="filter-wrapper">filter</div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
