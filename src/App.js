import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import AddProductForm from "./components/AddProductForm";
import ProductsList from "./components/ProductsList";
function App() {
  const [editProductId, setEditProductId] = useState(null);

  const handleEditProduct = (productId) => {
    setEditProductId(productId);
  };

  const handleCloseEdit = () => {
    setEditProductId(null);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Менеджер продуктов</h1>
        <AddProductForm />
        <ProductsList onEditProduct={handleEditProduct} />
      </div>
    </Provider>
  );
}

export default App;
