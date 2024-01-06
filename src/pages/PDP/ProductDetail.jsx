import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeartIcon, StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import {data} from '../../mockData/data.js';

const ProductDetail = () => {
  const params = useParams();
  const [productData, setProductData] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState();
  let images = useMemo(()=> new Array, []);

  const [activeImage, setActiveImage] = useState(images[0]);
  
  useEffect(() => {
      data.map((item)=> {
          if(productData.productImage === item.id) {
              images.push(item.image_one);
              images.push(item.image_two);
              images.push(item.image_three);
              images.push(item.image_four);
            }
        })
    },[productData.productImage, images])
    
    let username = "user";
  let password = "userPass";

  const headers = useMemo(() => new Headers(), []);

  headers.set(
    "Authorization",
    "Basic " + Buffer.from(username + ":" + password).toString("base64")
  );

  useEffect(() => {
    fetch(`http://localhost:8080/amaterasu/api/products/${params.id}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => console.log("ang error ay : " + err));
  }, [headers, params]);

  useEffect(() => {
    fetch(`http://localhost:8080/amaterasu/api/products/sizes/${params.id}`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setProductSizes(data);
      })
      .catch((err) => console.log("ang error ay : " + err));
  }, [headers, params]);

  let sortedSizes = [...productSizes].sort(
    (a, b) => parseFloat(a.actualSize) - parseFloat(b.actualSize)
  );

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-white adjustment-container w-full">
      <div className="">
        <div aria-label="Breadcrumb" className="bg-white pt-10">
          <ol
            role="list"
            className="mx-auto flex max-w-3xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key={productData.productID}>
              <div className="flex items-center">
                <a
                  href={productData.productCategory}
                  className="mr-2 text-sm font-medium text-gray-900"
                  style={{ textTransform: "capitalize" }}
                >
                  {productData.productCategory}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li key={productData.productID}>
              <div className="flex items-center">
                <a
                  href={productData.productSubcategory}
                  className="mr-2 text-sm font-medium text-gray-900"
                  style={{ textTransform: "capitalize" }}
                >
                  {productData.productSubcategory}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li className="text-sm">
              <a
                href={productData.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {productData.productName}
              </a>
            </li>
          </ol>
        </div>

        {/* Image gallery - LEFT SIDE */}
        <div className="mx-auto place-items-center max-w-2xl px-4 pb-16 pt-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-8 lg:grid-rows-[auto,auto,auto,auto] lg:gap-x-1 lg:px-4 lg:pb-24 ">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block lg:col-span-1 lg:py-10 justify-between">
            <div className="grid grid-rows-4 grid-flow-col gap-3">
              <img
                src={images[0]}
                alt={productData.productImage}
                className="h-24 w-24 object-cover object-center rounded-lg"
                onClick={() => setActiveImage(images[0])}
              />
              <img
                src={images[1]}
                alt={productData.productImage}
                className="h-24 w-24 object-cover object-center rounded-lg"
                onClick={() => setActiveImage(images[1])}
              />
              <img
                src={images[2]}
                alt={productData.productImage}
                className="h-24 w-24 object-cover object-center rounded-lg"
                onClick={() => setActiveImage(images[2])}
              />
              <img
                src={images[3]}
                alt={productData.productImage}
                className="h-24 w-24 object-cover object-center rounded-lg"
                onClick={() => setActiveImage(images[3])}
              />
            </div>
          </div>

          {/* MAIN PRODUCT IMAGE */}
          
          <div className="hidden overflow-hidden rounded-lg lg:block lg:col-span-4" >
            <img
              src={activeImage}
              alt={productData.productImage}
              className="h-full w-full aspect-auto object-cover object-center rounded-lg try"
            />
          </div>

          {/* PRODUCT INFO - RIGHT SIDE */}
          {/* PRODUCT NAME */}
          <div className="mx-auto max-w-xl px-2 pb-16 pt-10 sm:px-2 lg:grid lg:max-w-7xl lg:col-span-3">
            <div className="lg:col-span-3 mt-3">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {productData.productName}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 lg:col-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${productData.productPrice}
              </p>

              {/* Reviews */}
              <div className="mt-2">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center justify-self-end">
                  <div className="flex items-center ">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          productData.productRatingRate > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">
                    {productData.productRatingRate} out of 5 stars
                  </p>
                  <a
                    href={productData.href}
                    className="ml-3 text-sm font-medium text-brand-dark hover:text-brand cursor-pointer"
                  >
                    {productData.productRatingCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-5">
                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-brand-dark hover:text-brand cursor-pointer"
                    >
                      Size guide
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                      {sortedSizes.map((size) => (
                        <RadioGroup.Option
                          key={size.sizeID}
                          value={size.actualSize}
                          decimal={2}
                          disabled={!size.stockStatus}
                          className={({ active }) =>
                            classNames(
                              size.stockStatus
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-brand" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.actualSize}
                              </RadioGroup.Label>
                              {size.stockStatus ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-brand"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mx-auto w-full sm:px-2 lg:grid lg:max-w-7xl lg:col-span-3 lg:grid-cols-3 justify-center">
                  <div
                    type="submit"
                    className="mt-5 grid justify-self-center h-10 items-center justify-center w-full rounded-md py-2"
                  >
                    <HeartIcon className="h-10 w-10 stroke-brand text-light stroke-2 hover:text-brand focus:ring-2 focus:ring-brand-light focus:ring-offset-2 cursor-pointer" aria-hidden="true" /> 
                  </div>

                  <button
                    type="submit"
                    className="mt-5 w-full col-span-2 rounded-md border border-transparent bg-brand mx-3 py-3 text-base font-medium text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2"
                  >
                    Add to bag
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="py-10 lg:col-span-8 w-full col-span-8 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6 lg:border-t lg:border-gray-200">
            <div className="">
              <h2 className="text-sm font-medium text-gray-900">
                Product Details
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  {productData.productDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
