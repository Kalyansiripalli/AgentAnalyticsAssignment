import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "antd";
import ProductCard from "./ProductCard";
import AddProductButton from "./AddProductButton";
import api from "../api/allProducts";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem } from "../redux/slices/productsSlice";
import AppContext from "../context/AppContext";

const ProductsPage = () => {
  // const dispatch = useDispatch();
  // const itemsArray = useSelector((state) => state.products); // Access products from state
  const {itemsArray,setItemsArray}=useContext(AppContext);
  const retriveProducts = async () => {
    const response = await api.get("/productsData");
    return response.data;
  };

  const [currentPage, setCurrentPage] = useState(1); // Initial default page is set to 1
  const [pageSize] = useState(4); // Default page size is 4 i.e., displaying 4 cards per page

  useEffect(() => {
    const getAllProducts = async () => {
      const data = await retriveProducts();
      console.log(data);
      if (data) {
        // dispatch(addItem(data)); // Dispatch action to store products
        setItemsArray(data);
      }
    };
    getAllProducts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Logic to find the first and last index based on the page selected and then render only those products
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = itemsArray.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "50px" }}
      >
        
        <AddProductButton />
      </div>
      <div className="productsContainer">
        {currentItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
        
      </div>
      <div style={{display:"flex",justifyContent:"center", marginTop:"50px"}}>
      <Pagination
          current={currentPage}
          total={itemsArray.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </>
  );
};

export default ProductsPage;
