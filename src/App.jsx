import { useEffect, useState, useMemo } from 'react'
import './App.css'
import { Buffer } from "buffer"
import Navbar from './components/navbar/Navbar';

function App() {
  const [productData, setProductData] = useState([]);

  let username = 'user';
  let password = 'userPass';

  const headers = useMemo(() => new Headers(), []);

  headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

  useEffect(() => {
    fetch("http://localhost:8080/amaterasu/api/products", {
      method: "GET",
      headers: headers,
    })
    .then(response => response.json())
    .then((data) => {
      setProductData(data);
    })
    .catch(err => console.log("ang error ay : " +err));
  }, [headers])

  const filterByCategoryWomanShoes =()=> {
    fetch("http://localhost:8080/amaterasu/api/products/category/women/shoes", {
      method: "GET",
      headers: headers,
    })
    .then(response => response.json())
    .then((data) => {
      setProductData(data);
    })
    .catch(err => console.log("ang error ay : " +err));
  }

  const filterByCategoryMenShoes =()=> {
    fetch("http://localhost:8080/amaterasu/api/products/category/men/shoes", {
      method: "GET",
      headers: headers,
    })
    .then(response => response.json())
    .then((data) => {
      setProductData(data);
    })
    .catch(err => console.log("ang error ay : " +err));
  }

  const getById =()=> {
    fetch("http://localhost:8080/amaterasu/api/products/4", {
      method: "GET",
      headers: headers,
    })
    .then(response => response.json())
    .then((data) => {
      setProductData(data);
    })
    .catch(err => console.log("ang error ay : " +err));
  }

  return (
    <>
      {/* <button onClick={filterByCategoryWomanShoes}>Women Shoes</button>
      <button onClick={filterByCategoryMenShoes}>Men Shoes</button>
      <button onClick={getById}>Men Shoes</button>
      {productData.length > 1 ? productData.map((item, index) => (
        <div key={index}>
          <p>Name: {item.productName}</p>
          <img src={item.productImage}/>
        </div>
      )) : 
      <div >
          <p>Name: {productData.productName}</p>
          <img src={productData.productImage}/>
        </div>
    } */}

    <Navbar/>

    </>
  )
}

export default App
