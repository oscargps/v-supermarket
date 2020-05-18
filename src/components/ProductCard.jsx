import React, { useState } from "react";
import Modal from "./Modal";
import ProductDetail from "./ProductDetail";
import "./style/ProductCard.css";
const ProductCard = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div onClick={toggleModal} className="ProductCard">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMkGGO9w7_eRrFV9akV2esOngem2omKz_ZrTJShib7K25j0Kxa&usqp=CAU"
        alt=""
      />
      <h3>{props.nombre}</h3>
      <Modal isOpen={modal} onClose={toggleModal}>
        <ProductDetail {...props} />
      </Modal>
    </div>
  );
};

export default ProductCard;
