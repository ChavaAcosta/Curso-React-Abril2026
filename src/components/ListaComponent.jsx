import React from "react";

export default function ListaComponent({ onSeleccionar }) {
  return (
    <ul className="flex flex-col justify-self-center h-20">
      <li>
        <button  className="button-simple" onClick={() => onSeleccionar("Elemento 1 seleccionado")}>
          Selecciona elemento 1
        </button>
      </li>
      <li>
        <button className="button-simple" onClick={() => onSeleccionar("Elemento 2 seleccionado")}>
          Selecciona elemento 2
        </button>
      </li>
    </ul>
  );
}
