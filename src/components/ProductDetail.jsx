import React from "react";
import "./style/ProductDetail.css";
const ProductDetail = (props) => {
  return (
    <div className="ProductDetail">
    Product Id: {props.id}
      <img
        className="ProductDetail__imagen"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMkGGO9w7_eRrFV9akV2esOngem2omKz_ZrTJShib7K25j0Kxa&usqp=CAU"
        alt=""
      />
      <h3>{props.nombre}</h3>
      <div>
          <h5>Descripción del producto</h5>
          <p>
              {props.descripcion}
          </p>
      </div>
      <table className="ProductDetail__table">
          <tr>
              <td> 
                  Precio: 
              </td>
              <td>
                  ${props.precio}
              </td>
          </tr>
          <tr>
              <td>
                  Disponibles: 
              </td>
              <td>
                  {props.stock}
              </td>
          </tr>
      </table>
      <button className="ProductDetail__button-edit">Editar</button>
    </div>
  );
};


export default ProductDetail