import { useEffect, useState } from "react";

const useInitialState = (API) =>{
    const [negocios, setnegocio] = useState({
        nombre: "",
        ciudad: "",
        sector: "",
        productos: []
    })
      useEffect(() => {
        fetch(API)
          .then((response) => response.json())
          .then((data) => {
              setnegocio(data[0])
            });
      }, []);
      return negocios;
}
export default useInitialState;