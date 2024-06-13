// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/dist/umd/react-router-dom.development';
import api from "../api/allProducts"
// import data from "../mockData/mockData";

const ProductDetailPage = () => {
    const {productId}=useParams();

    const retriveProducts= async ()=>{
      const response= await api.get("/productsData")
      return response.data[productId-1];
    }

    const[productInfo,setProductInfo]=useState({});

    useEffect(() => {
      const getAllProducts= async ()=>{
        const data= await retriveProducts();
        if(data)
          setProductInfo(data)
      }
      getAllProducts()
    }, []);
    

  return (
    <div className='product-detail-container'>
        <u><h1>Detailed Product View:</h1></u>
        <h3 className='product-title'>{productInfo.title}</h3>
        <img src={productInfo.image} alt=""  className='productDetailPageImage'/>
        <p className='product-price'>{`price : ₹ ${productInfo.price}`}</p>
        <p className='product-description'>{productInfo.description}</p>
    </div>
  )
}

export default ProductDetailPage