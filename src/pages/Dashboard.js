import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import PromotionBar from '../components/PromotionBar';

const Dashboard = () => {
  return (
    <div className="page-wrap">
      <Header />
      <PromotionBar />
      <Breadcrumb />
      <ProductList />
    </div>
  );
};

export default Dashboard;