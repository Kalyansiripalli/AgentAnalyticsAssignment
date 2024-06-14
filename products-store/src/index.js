import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import ProductsPage from "./components/ProductsPage";
import ProductDetailPage from './components/ProductDetailPage';
import EditProductDetailPage from './components/EditProductDetailPage';
import AddNewProductPage from './components/AddNewProductPage';
import appStore from './store/appStore';
import {Provider} from "react-redux"

const router = createBrowserRouter(createRoutesFromChildren(
  <Route path='/' element={<App />}>
    <Route path='' element={<ProductsPage />} />
    <Route path='Productdetailpage/:productId' element={<ProductDetailPage />} />
    <Route path='Editproductdetails/:productId' element={<EditProductDetailPage />} />
    <Route path='addnewproduct' element={<AddNewProductPage />} />
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={appStore}>
      <RouterProvider router={router} />
  </Provider>
  
);

reportWebVitals();
