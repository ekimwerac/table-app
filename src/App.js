import React, { useState } from 'react';
import TableComponent from './Components/TableComponent';

const App = () => {
  const [sellers, setSellers] = useState([
    {
      firstName: 'Antonio',
      surname: 'Guterez',
      phone: '079955321',
      id: 1,
    }
    // ... other sellers
  ]);

  const updateSeller = (id, updatedData) => {
    setSellers((prevSellers) =>
      prevSellers.map((seller) => (seller.id === id ? { ...seller, ...updatedData } : seller))
    );
  };

  return (
    <div>
      <h1>Sellers Table</h1>
      <TableComponent sellers={sellers} updateSeller={updateSeller} />
    </div>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
