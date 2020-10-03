import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <>
      <h3>Latest Products</h3>
      <Row className="my-3">
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
