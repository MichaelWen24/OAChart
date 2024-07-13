import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SalesChart from './SalesChart';
import SalesTable from './SalesTable';
import Logo from '../stackline_logo.svg'

const Dashboard: React.FC = () => {
  const product = useSelector((state: RootState) => state.product.data);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="header">
        <img className="logo" src={Logo} alt='Logo'/>
      </div>
      <div className="content">
        <div className="product-info">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <h4>{product.subtitle}</h4>
          <div className="tags">
            {product.tags.map((tag: string) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="sales-data">
          <h2>Retail Sales</h2>
          <SalesChart sales={product.sales} />
        </div>
        <SalesTable sales={product.sales} />
      </div>
    </div>
  );
};

export default Dashboard;
