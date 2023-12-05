// components/TableComponent/SellerForm.js

import React, { useState } from 'react';

const SellerForm = ({ seller, updateSeller }) => {
  const [editedSeller, setEditedSeller] = useState({ ...seller });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedSeller((prevSeller) => ({ ...prevSeller, [name]: value }));
  };

  const handleSave = () => {
    updateSeller(editedSeller.id, editedSeller);
    // The updateSeller function already toggles off edit mode in TableRow
  };

  return (
    <>
      <td>
        <input
          type="text"
          name="firstName"
          value={editedSeller.firstName}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="surname"
          value={editedSeller.surname}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phone"
          value={editedSeller.phone}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={handleSave}>Save</button>
        {/* Cancel button not needed as edit mode is toggled off after saving */}
      </td>
    </>
  );
};

export default SellerForm;
