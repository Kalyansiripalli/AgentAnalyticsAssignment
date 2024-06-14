import React, { useEffect, useState } from "react";
import { Pagination, Spin } from "antd";
import ProductCard from "./ProductCard";
import AddProductButton from "./AddProductButton";
import api from "../api/allProducts";
import { useDispatch, useSelector } from "react-redux";
import { ListOfAllProducts } from "../store/productSlice";

const ProductsPage = () => {
  const itemsArray = useSelector((store) => store.product.items);
  const [isLoading, setIsLoading] = useState(true);
  const retriveProducts = async () => {
    const response = await api.get("/productsData");
    return response.data;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllProducts = async () => {
      setIsLoading(true);
      const data = await retriveProducts();
      if (data) {
        // After getting data, dispatch an action to update the products list
        dispatch(ListOfAllProducts(data));
      }
      setIsLoading(false);
    };
    getAllProducts();
  }, [dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = itemsArray?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "50px" }}
      >
        <AddProductButton />
      </div>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="productsContainer">
            {currentItems?.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Pagination
              current={currentPage}
              total={itemsArray.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProductsPage;
