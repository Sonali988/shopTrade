import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';
import ProductList from '../components/ProductList';

const Dashboard = () => {
  return (
    <div className="page-wrap">
      <Header />
      <Breadcrumb />
      <ProductList />
    </div>
  );
};

export default Dashboard;