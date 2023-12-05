import React, { useState } from 'react';

const SellerForm = ({ seller, updateSeller, toggleEditMode }) => {
  const [editedSeller, setEditedSeller] = useState({ ...seller });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditedSeller((prevSeller) => {
      const updatedSeller = { ...prevSeller, [name]: value };
      updateSeller(updatedSeller.id, updatedSeller);
      return updatedSeller;
    });
  };

  return (
    <>
      <td>
        <input type="text" name="firstName" value={editedSeller.firstName} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="surname" value={editedSeller.surname} onChange={handleChange} />
      </td>
      <td>
        <input type="text" name="phone" value={editedSeller.phone} onChange={handleChange} />
      </td>
      <td>
        <button onClick={toggleEditMode}>Cancel</button>
      </td>
    </>
  );
};

export default SellerForm;



// import React, { useState } from 'react';

// const SellerForm = ({ seller, updateSeller, toggleEditMode }) => {
//   const [editedSeller, setEditedSeller] = useState({ ...seller });

//   const handleChange = (event) => {
//     setEditedSeller({ ...editedSeller, [event.target.name]: event.target.value });
//   };

//   const handleSave = () => {
//     updateSeller(editedSeller.id, editedSeller);
//     toggleEditMode();
//   };

//   return (
//     <>
//       <td>
//         <input type="text" name="firstName" value={editedSeller.firstName} onChange={handleChange} />
//       </td>
//       <td>
//         <input type="text" name="surname" value={editedSeller.surname} onChange={handleChange} />
//       </td>
//       <td>
//         <input type="text" name="phone" value={editedSeller.phone} onChange={handleChange} />
//       </td>
//       <td>
//         <button onClick={handleSave}>Save</button>
//         <button onClick={toggleEditMode}>Cancel</button>
//       </td>
//     </>
//   );
// };

// export default SellerForm;
