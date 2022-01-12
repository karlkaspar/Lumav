import React from 'react';
import './styles/css/main.min.css';

import Header from './components/header'
import Footer from './components/footer';
import ProductsList from './components/products_list';

import { useState } from 'react';
import productsFromFile from './products.json';

function App() {
  const [cartCount, setData] = useState(0);
  
  const setProductCount = () => {
    setData(cartCount + 1);
  }

  const setNewProduct = () => {
    console.log(setNewProduct)
  }

  return (
    <>
      <Header productCount={cartCount}/>
      <ProductsList incrementProductCount={setProductCount}/>
      <Footer />
    </>
  );
}

export default App;
