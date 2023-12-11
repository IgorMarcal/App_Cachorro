import React from "react"

const AdicionarAlimento = ({ alimento, porcentagem }) => {
    setPorcentagem(porcentagem + 1);
  
    if (alimento === "água") {
      ble.write("water");
    } else if (alimento === "ração") {
      ble.write("food");
    }
  };

export default AdicionarAlimento