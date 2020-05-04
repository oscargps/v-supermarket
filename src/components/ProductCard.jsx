import React from "react";
import "./style/ProductCard.css";
const ProductCard = (props) => {
  return (
    <div onClick={props.onOpen} className="ProductCard">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMkGGO9w7_eRrFV9akV2esOngem2omKz_ZrTJShib7K25j0Kxa&usqp=CAU"
        alt=""
      />
      <h3>{props.nombre}</h3>
    </div>
  );
};

export default ProductCard;
