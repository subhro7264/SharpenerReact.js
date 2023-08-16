import React ,{useState} from 'react'

import './App.css';
import Input from './components/Input';
import ProductsDetails from './components/ProductsDetails';



function App() {
  const [productData, setProductData]=useState([])
  
const productHandler=(product)=>{
  setProductData(prevProduct => {
    return [product,...prevProduct]
    
  })
  localStorage.setItem( product.id, JSON.stringify(product));
 
} 



  return (
    <div className="App">
      <header className="App-header">
        <Input onAddProduct={productHandler} />
         <ProductsDetails  items={productData}/>
      </header>
    </div>
  );
}

export default App;
