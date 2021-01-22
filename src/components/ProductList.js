import React, { useEffect, useState } from 'react';
import _ from "lodash";
import { MenuItem, Select } from '@material-ui/core';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch('https://cdn.shopify.com/s/files/1/0341/4907/3029/files/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProductList(data)
      })
  }

  const filter = (selectedTag) => setProductList(_.filter(productList, product => product.tag === selectedTag));
  const sort = (value) => setProductList(_.sortBy(productList, value));

  return (
    <div>
      <div className="photo-container">
        <span className="all-product-text heading-margin">All Products <span className="all-product-count"> ({productList.length} Products)</span> </span>
        <div className="filter-heading-margin heading-margin">
          <span className="filter-text">FILTERS : </span>
          <span className="filter-allproduct-option filter-allproduct-option-text" onClick={getProducts}>All Products</span>
          <span className="filter-option">

            {_.map(_.uniqBy(productList, 'tag'),
              function (product) { return <span key={product.id} className="filter-tag" onClick={() => filter(product.tag)}> {product.tag} </span> }
            )}

          </span>
          <span className="filter-allproduct-option sort">
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value="price"
              onChange={(value) => sort(value)}
            >
              <MenuItem value={'price'}>Sort By: Price Low to High</MenuItem>
            </Select>
          </span>
        </div>

        <ul>
          {_.map(productList, (product) =>
            <li key={product.id}>
              <img
                src={product.image_src[0]}
                alt={product.image_src[0]} />
              <h3 className="vendor">{product.vendor}</h3>
              <p className="title">{product.name}</p>
              <div className="price-wrap">
                <p className="price">${product.price}</p>
                <del className="compared-price">{product.compare_at_price}</del>
                <p className="compared-price percentage">({((100 * (Number(product.compare_at_price) - Number(product.price))) / Number(product.compare_at_price)).toFixed(0)}% OFF)</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;