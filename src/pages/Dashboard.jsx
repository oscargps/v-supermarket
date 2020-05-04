import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import "./style/Dashboard.css";
import useInitialState from "../hooks/useInitialState";
const Dashboard = () => {
  const API = "http://localhost:3001/negocios";
  const initialState = useInitialState(API);
  console.log(initialState);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const { nombre, ciudad, sector, productos } = initialState;
  console.log(productos);

  return (
    <div>
      <Header />
      <div className="Dashboard">
        <div>
          <h1>{nombre} </h1>
        </div>
        <button className="btn_add">+</button>

        <div>
          <h2>Mis Productos</h2>
          <div className="Products">
            {productos.map((producto) => (
              <ProductCard
                onOpen={toggleModal}
                key={producto.nombre}
                nombre={producto.nombre}
              />
            ))}
          </div>

          <Modal isOpen={modal} onClose={toggleModal}>
            <h4>Esto esta dentro del modal</h4>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
