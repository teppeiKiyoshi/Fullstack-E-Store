// import { useEffect, useState, useMemo } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './pages/Hero/Hero';
import ProductListPage from './pages/PLP/ProductListPage';
import Navbar from './components/navbar/Navbar';
import ProductDetail from './pages/PDP/ProductDetail';
// import { Buffer } from "buffer"


function App() {
  // const [productData, setProductData] = useState([]);

  // let username = 'user';
  // let password = 'userPass';

  // const headers = useMemo(() => new Headers(), []);

  // headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));

  // useEffect(() => {
  //   fetch("http://localhost:8080/amaterasu/api/products", {
  //     method: "GET",
  //     headers: headers,
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     setProductData(data);
  //   })
  //   .catch(err => console.log("ang error ay : " +err));
  // }, [headers])

  // const filterByCategoryWomanShoes =()=> {
  //   fetch("http://localhost:8080/amaterasu/api/products/category/women/shoes", {
  //     method: "GET",
  //     headers: headers,
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     setProductData(data);
  //   })
  //   .catch(err => console.log("ang error ay : " +err));
  // }

  // const filterByCategoryMenShoes =()=> {
  //   fetch("http://localhost:8080/amaterasu/api/products/category/men/shoes", {
  //     method: "GET",
  //     headers: headers,
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     setProductData(data);
  //   })
  //   .catch(err => console.log("ang error ay : " +err));
  // }

  // const getById =()=> {
  //   fetch("http://localhost:8080/amaterasu/api/products/4", {
  //     method: "GET",
  //     headers: headers,
  //   })
  //   .then(response => response.json())
  //   .then((data) => {
  //     setProductData(data);
  //   })
  //   .catch(err => console.log("ang error ay : " +err));
  // }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Hero/>}/>
        <Route path='/products' element={<ProductListPage/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
