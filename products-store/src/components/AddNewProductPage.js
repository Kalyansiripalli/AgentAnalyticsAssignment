import React, { useContext } from "react";
import { Button, Form, Input, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../api/allProducts";
import AppContext from "../context/AppContext"; // Correct import path

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
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

const AddNewProductPage = () => {
  const { itemsArray, setItemsArray } = useContext(AppContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
    // Create the new product
    const newProduct = {
      id: itemsArray.length + 1,
      ...values,
      rating: {
        rate: 0,
        count: 0,
      },
    };

    try {
      const response = await api.post("/productsData", newProduct);
      if (response.status === 201) {
        // Update the context state
        setItemsArray([...itemsArray, newProduct]);
        message.success("Product added successfully!");
        navigate("/"); // Navigate to home or another route
      } else {
        message.error("Failed to add product");
      }
    } catch (error) {
      console.error("Failed to add product:", error);
      message.error("Failed to add product");
    }
  };

  return (
    <div className="add-product-form-container">
      <h1>Add New Product</h1>
      <Form
        form={form}
        name="add_product"
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Product Name"
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
          label="Price"
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
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter the description",
            },
          ]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: "Please enter the category",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image URL"
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

export default AddNewProductPage;
