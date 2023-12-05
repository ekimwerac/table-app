### Explanation of components ###

### `TableComponent` Component

#### State:

- **`sellers`**: The state that holds an array of seller objects fetched from the JSON server.

#### Handlers:

- **`handleUpdateSeller`**: A function that takes an `id` and `updatedData` as arguments, sends a request to the JSON server to update the seller's information, and updates the local state (`sellers`) with the modified data.

#### Component:

- The `TableComponent` component is responsible for rendering the table and managing the state of sellers.
- It uses the `fetchSellers` function from the `Api.js` service to fetch seller data from the JSON server on component mount.
- The `handleUpdateSeller` function is passed down to child components to handle the update of seller information.

### `TableRow` Component

#### State:

- **`editMode`**: A state variable that determines whether the row is in edit mode.

#### Handlers:

- **`handleToggleEditMode`**: A function that toggles the `editMode` state between `true` and `false`.

#### Component:

- The `TableRow` component is a child component of `TableComponent` responsible for rendering each row in the table.
- It manages the `editMode` state to determine whether to render the row in edit mode or display the seller's information.
- It provides the `handleToggleEditMode` function to toggle the edit mode state.

### `SellerForm` Component

#### State:

- **`editedSeller`**: The state that holds the edited seller information.

#### Handlers:

- **`handleChange`**: A function that updates the `editedSeller` state in real-time as the user types into the input fields.
- **`handleSave`**: A function that triggers the `updateSeller` function (passed as a prop) to update the seller on the server and automatically toggles off the edit mode in the parent `TableRow` component.

#### Component:

- The `SellerForm` component is a child component of `TableRow` responsible for rendering input fields for editing seller information.
- It uses the `handleChange` function to update the `editedSeller` state based on user input.
- The `handleSave` function updates the seller on the server using the `updateSeller` function and toggles off the edit mode in the parent component.

### Data Fetching and Updating (in `api.js`):

- **`fetchSellers`**: A function that fetches the seller data from the JSON server.
- **`updateSeller`**: A function that sends a request to the JSON server to update a specific seller's information.

### Usage:

- The `TableComponent` renders the table and passes the `handleUpdateSeller` function down to child components.
- `TableRow` renders each row and manages the edit mode state, passing the `handleToggleEditMode` function to toggle the state.
- `SellerForm` renders the form for editing seller information, using the `handleChange` function for real-time updates and the `handleSave` function to update the server and toggle off the edit mode.

This component structure enables real-time editing of seller information with seamless interaction and updates to the JSON server. Each component is responsible for a specific aspect of the functionality, promoting a modular and maintainable code structure.