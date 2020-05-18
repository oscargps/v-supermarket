import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import "./style/Dashboard.css";
import useGetBussines from "../hooks/useInitialState";
const Dashboard = () => {
  const API = "http://localhost:3001/negocios";
  const negocios = useGetBussines(API);
  console.log(useGetBussines);
  const { nombre, ciudad, sector, productos } = negocios;
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
              <ProductCard key={producto.nombre} {...producto} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
