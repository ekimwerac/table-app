// components/TableComponent/TableRow.js

import React, { useState } from 'react';
import SellerForm from './SellerForm';

const TableRow = ({ seller, updateSeller }) => {
  const [editMode, setEditMode] = useState(false);

  const handleToggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <tr>
      {editMode ? (
        <SellerForm
          seller={seller}
          updateSeller={(id, updatedData) => {
            updateSeller(id, updatedData);
            handleToggleEditMode(); // Toggle off edit mode after updating
          }}
        />
      ) : (
        <>
          <td>{seller.firstName}</td>
          <td>{seller.surname}</td>
          <td>{seller.phone}</td>
          <td>
            <button onClick={handleToggleEditMode}>Edit</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
