import React, {useState, useMemo, useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar';

const ProductListPage = () => {

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

  return (
    <>
    <Navbar/>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productData.map((product) => (
            <a key={product.id} href={`/products/${product.productID}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.productImage}
                  alt={product.description}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.productName}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.productPrice}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductListPage