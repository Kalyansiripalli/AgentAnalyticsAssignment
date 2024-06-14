import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist/umd/react-router-dom.development";
import api from "../api/allProducts";
import { Spin } from "antd";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productInfo, setProductInfo] = useState({});

  const retriveProducts = async () => {
    const response = await api.get("/productsData");
    return response.data[productId - 1];
  };

  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      const data = await retriveProducts();
      if (data) {
        setProductInfo(data);
      }
      setIsLoading(false);
    };
    getAllProducts();
  }, []);

  return (
    <div className="product-detail-container">
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <u>
            <h1>Detailed Product View:</h1>
          </u>
          <h3 className="product-title">{productInfo.title}</h3>
          <img
            src={productInfo.image}
            alt="productimage"
            className="productDetailPageImage"
          />
          <p className="product-price">{`price : ₹ ${productInfo.price}`}</p>
          <p className="product-description">{productInfo.description}</p>
        </>
      )}
    </div>
  );
};

export default ProductDetailPage;
