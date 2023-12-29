import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import Card from '../../../components/dynamic/Card/Card';
import { ProductContext } from '../../../context/ProductContext';

const Products = (props) => {
  const { products } = useContext(ProductContext);

  if (products.length === 0) {
    return (
      <div className="text-center">
        <Spinner animation="border" variant="secondary" />
        <p>Məhsullar yüklənir...</p>
      </div>
    );
  }

  if (props.data === "home") {
    return (
      <div className="row gy-3 my-4 p-0">
        {products && products.map((item) => {
            return <Card data={item} key={item.id} />
        })}
      </div>
    );
  } else {
    return (
      <div className="row gy-3 my-4 p-0">
        {products && products.map((item) => {
            return <Card data={item} key={item.id} />
        })}
      </div>
    );
  }
};

export default Products