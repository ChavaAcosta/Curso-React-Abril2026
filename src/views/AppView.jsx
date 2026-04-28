import React, { useState } from "react";
import { Link } from "react-router-dom";
import SaludoComponent from "../components/SaludoComponent";
import CardChildren from "../components/CardChildren";
import UsuarioComponent from "./../components/UsuarioComponent";
import ButtonActionComponent from "../components/ButtonActionComponent";
import ListaComponent from "../components/ListaComponent";
import ProductoComponent from "./../components/ProductoComponent";

export default function AppView() {
  const parametro = 2323;

  const user = {
    nombre: "Omar",
    edad: 23,
  };

  const [usuario, setUsuario] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", precio: 1500 },
    { id: 2, name: "Celular", precio: 1000 },
    { id: 3, name: "Monitor", precio: 900 },
    { id: 4, name: "Mouse", precio: 200 },
  ]);

  const user2 = {
    nombre: "Angel",
    edad: 23,
  };
  const users = [
    {
      nombre: "tal",
      edad: 0,
    },
    {
      nombre: "2",
      edad: 1,
    },
  ];
  const handleClick = () => {
    console.log("me haz presionado");
    setUsuario("Omar");
    setIsTrue(!isTrue);
  };
  const handleSelection = (elemento) => {
    console.log("Evento:", elemento);
  };

  return (
    <div className="px-10  justify-center content-center text-center">
      <h1 className="text-5xl font-bold text-center">App View</h1>

      {isTrue ? <h1>Es verdadero</h1> : <h1>Es falso</h1>}

      {isTrue && <h1>Es true</h1>}
      <SaludoComponent nombre={"Omar"} apellido={"PEREX"} />
      <CardChildren titulo={"Soy un modal"}>
        <p>Hola soy el children</p>
      </CardChildren>

      <br />
      {/*nombre={usuario.nombre} */}
      <UsuarioComponent {...user} />
      <UsuarioComponent {...user2} />

      <ButtonActionComponent onClick={handleClick} />
      <ListaComponent onSeleccionar={handleSelection} />

      <Link to={"/otra"} className="">
        Ir a otra pagina
      </Link>

      <h1>{usuario}</h1>

      <ProductoComponent name={"Tenis"} precio={25} id={5} />
      {products.map((producto) => (
        <ProductoComponent
          name={producto.name}
          precio={producto.precio}
          id={producto.id}
        />
      ))}
      {users.map((user) => (
        <UsuarioComponent {...user} />
      ))}
      <section className="px-5 py-2 bg-amber-100">
        <input
          className="px-4 py-2 w-80 border border-black rounded-md focus:outline-blue-400"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <p>{usuario}</p>
      </section>

      <Link to={`/parametro/${parametro}`} className="">
        Ir a param
      </Link>
    </div>
  );
}
