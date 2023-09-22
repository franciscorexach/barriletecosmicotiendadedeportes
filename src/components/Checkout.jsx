import {
    getFirestore,
    collection,
    addDoc,
    doc,
    updateDoc,
    writeBatch,
  } from "firebase/firestore";
  import { useState } from "react";
  
  const Checkout = () => {
    const [orderId, setOrderId] = useState(null);
  
    const createOrder = () => {
      
      const order = {
        buyer: {
          name: "Fran",
          phone: "12121212",
          email: "fran1986@gmail.com",
        },
        items: [
          {
            id: "P9Hzb2NvRgLUtDe9tOkD",
            title: "Camiseta Adidas Argentina",
            price: 200,
          },
        ],
        total: 200,
      };
  
      const db = getFirestore();

      const ordersCollection = collection(db, "orders");

      addDoc(ordersCollection, order)
        .then((docRef) => {
          console.log("Orden creada con ID: ", docRef.id);
          alert("Orden creada con ID: " + docRef.id);
          setOrderId(docRef.id);
        })
        .catch((error) => {
          console.error("Error al crear la orden: ", error);
        });
    };
  
    const updateOrder = () => {
      
      const db = getFirestore();
  
      
      const orderDoc = doc(db, "orders", orderId);
  
      
      updateDoc(orderDoc, { total: 2000 })
        .then(() => {
          console.log("Orden actualizada");
          alert("Orden actualizada");
        })
        .catch((error) => {
          console.error("Error al actualizar la orden: ", error);
        });
    };
  
    const updateOrders = () => {
      
      const db = getFirestore();
  
      const batch = writeBatch(db);
  
      const doc1 = doc(db, "orders", "OwhVZ5Fry3zDr3VLjbE6");
  
      batch.update(doc1, { total: 3000});
  
      batch
        .commit()
        .then(() => {
          console.log("Ordenes actualizadas");
        })
        .catch((error) => {
          console.error("Error al actualizar las ordenes: ", error);
        });
    };
  
    return (
      <div>
        <h2>Checkout</h2>
  
        <button onClick={createOrder}>Crear Orden</button>
        {!!orderId && <p>Orden creada con ID: {orderId}</p>}
  
        <hr />
  
        {!!orderId && <button onClick={updateOrder}>Actualizar Orden</button>}
  
        <button onClick={updateOrders}>Actualizar Ordenes</button>
      </div>
    );
  };
  
  export default Checkout;