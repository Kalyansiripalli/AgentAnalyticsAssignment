import React, { useState } from "react";
import { Button, Form, Input, Space, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/allProducts";
import { useDispatch, useSelector } from "react-redux";
import { editProductSlice } from "../store/productSlice";

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const EditProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const itemsArray = useSelector((store) => store.product.items);
  const [productInfo] = useState(itemsArray[productId - 1]);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    // Update the product in the data array
    const updatedData = { id: parseInt(productId), ...values };
    const response = await api.put(`/productsData/${productId}`, updatedData);

    const updatedItemsArray = itemsArray.map((item) =>
      item.id === parseInt(productId) ? updatedData : item
    );
    dispatch(editProductSlice(updatedItemsArray));
    // Optionally navigate back or show a success message
    message.success("Product updated successfully!");
    navigate("/"); // Navigate to home or another route
  };

  return (
    <div className="editDetailsForm">
      <h1>Edit Product Details using the below form:</h1>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        initialValues={productInfo}
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Enter Product Name"
          rules={[
            {
              required: true,
              message: "Please enter the product name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Enter Price"
          rules={[
            {
              required: true,
              message: "Please enter the price",
            },
          ]}
        >
          <Input type="number" step="0.01" />
        </Form.Item>
        <Form.Item
          name="image"
          label="Enter Image URL"
          rules={[
            {
              required: true,
              message: "Please enter the image URL",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Space>
            <SubmitButton form={form}>Submit</SubmitButton>
            <Button htmlType="reset" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProductDetailPage;
