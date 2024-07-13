import React, { useState } from 'react';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface SalesTableProps {
  sales: SalesData[];
}

type SortKey = keyof SalesData;

const SalesTable: React.FC<SalesTableProps> = ({ sales }) => {
  const [sortKey, setSortKey] = useState<SortKey>('weekEnding');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedSales = [...sales].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (a[sortKey] > b[sortKey]) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="sales-table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('weekEnding')}>
              WEEK ENDING {sortKey === 'weekEnding' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('retailSales')}>
              RETAIL SALES {sortKey === 'retailSales' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('wholesaleSales')}>
              WHOLESALE SALES {sortKey === 'wholesaleSales' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('unitsSold')}>
              UNITS SOLD {sortKey === 'unitsSold' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('retailerMargin')}>
              RETAILER MARGIN {sortKey === 'retailerMargin' && (sortOrder === 'asc' ? '▲' : '▼')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold.toLocaleString()}</td>
              <td>${sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
