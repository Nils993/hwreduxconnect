import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../reduser/productsSlice";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleToggleAvailability = (productId) => {
    const productToUpdate = products.find(
      (product) => product.id === productId
    );
    dispatch(
      updateProduct({
        ...productToUpdate,
        available: !productToUpdate.available,
      })
    );
  };

  return (
    <div>
      <h2>Список продуктов</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: ${product.price}</p>
          <button onClick={() => handleDelete(product.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
