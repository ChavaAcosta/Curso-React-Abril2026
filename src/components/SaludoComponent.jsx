import React from "react";

export default function SaludoComponent(props) {
  return (
    <div className="bg-red-300 border rounded-2xl">
      Hola desde un componente, {props.nombre} {props.apellido} {props.edad}
    </div>
  );
}
