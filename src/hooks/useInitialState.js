import { useEffect, useState } from "react";

const useGetBussines = (API) =>{
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
export default useGetBussines;