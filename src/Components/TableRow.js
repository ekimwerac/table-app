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
        <SellerForm seller={seller} updateSeller={updateSeller} toggleEditMode={handleToggleEditMode} />
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
