import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>${item.price}</p>
      <p>{item.categoryID}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;