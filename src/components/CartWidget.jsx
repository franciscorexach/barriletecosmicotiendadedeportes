import React from "react";

const CartWidget = ({ notificationCount }) => {
    return (
      <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        {notificationCount > 0 && <span className="notification">{notificationCount}</span>}
      </div>
    );
  };

export default CartWidget;