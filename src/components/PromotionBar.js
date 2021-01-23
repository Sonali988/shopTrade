import React from 'react';
import { PROMOTIONAL_TEXT, INVITE } from '../utilities/Constants';

const PromotionBar = () => {
  return (
    <div className="promotional-wrap">
      <span className="promotional-bar">{PROMOTIONAL_TEXT}
        <span className="filter-tag invite"> {INVITE} </span>
      </span>
    </div>
  );
};

export default PromotionBar;