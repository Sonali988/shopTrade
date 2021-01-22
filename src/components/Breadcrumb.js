import React from 'react';

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-wrap heading-margin">
      <span className="">Home </span>
      <span>&#x2F; </span>
      <span className="">Clothing </span>
      <span className="divider" aria-hidden="true">&#x2F; </span>
      <span className="">Mens Clothing </span>
      <span className="divider" aria-hidden="true">&#x2F; </span>
      <span className="breadcrumb-title"> All Mens Clothing</span>
    </div>
  );
};

export default Breadcrumb;