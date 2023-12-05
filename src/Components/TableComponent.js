import React, { useState } from 'react';
import TableRow from './TableRow';

const TableComponent = ({ sellers, updateSeller }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Surname</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sellers.map((seller) => (
          <TableRow key={seller.id} seller={seller} updateSeller={updateSeller} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
