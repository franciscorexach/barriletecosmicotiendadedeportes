const CartWidget = () => {
    return (
      <div>
        <button className="btn btn-outline-primary position-relative">
          <i className="bi bi-cart"></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span className="visually-hidden">Productos añadidos al carrito</span>
  </span>
        </button>
      </div>
    );
  };

export default CartWidget;