import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const ProductCard = ({ item }) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="productImage"
          src={item.image}
          style={{ width: "70%", height: "200px", margin: "auto",padding:"10px" }}
        />
      }
      actions={[
        <Link to={`/editproductdetails/${item.id}`}>
          <EditOutlined key="edit" />
        </Link>,
        
        <Link to={`/Productdetailpage/${item.id}`}>
          <EyeOutlined key="eye" />
        </Link>,
      ]}
    >
      <Meta title={item.title} description={`price : ₹ ${item.price}`} />
    </Card>
  );
};

export default ProductCard;
