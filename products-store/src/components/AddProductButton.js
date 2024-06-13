import React from 'react';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
const AddProductButton = () => (
  <Flex gap="small" wrap>
    <Link to="addnewproduct"><Button type="primary" > Add Products Button</Button></Link>
  </Flex>
);
export default AddProductButton;