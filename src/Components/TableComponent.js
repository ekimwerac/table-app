// components/TableComponent/TableComponent.js

import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import { fetchSellers, updateSeller } from '../services/Api';

const TableComponent = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSellers();
      setSellers(data);
    };

    fetchData();
  }, []); // Fetch data on component mount

  const handleUpdateSeller = async (id, updatedData) => {
    try {
      await updateSeller(id, updatedData);
      setSellers((prevSellers) =>
        prevSellers.map((seller) => (seller.id === id ? { ...seller, ...updatedData } : seller))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sellers Table</h1>
      <table>
        {/* ... table header ... */}
        <tbody>
          {sellers.map((seller) => (
            <TableRow key={seller.id} seller={seller} updateSeller={handleUpdateSeller} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
