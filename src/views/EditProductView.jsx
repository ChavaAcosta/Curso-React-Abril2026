import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormEditProduct from './../components/FormEditProduct';
import { getByProductId } from "../services/products/productService";
export default function EditProductView() {
  const parametro = useParams();
  const id = parametro.id;
  const [product, setProduct] = useState({})

  useEffect(()=>{
    getByProductId(id).then(product =>{
      setProduct(product)
    });

  },[])

  return (
    <>
      <h1 className="text-5xl font-bold">Crear Productos</h1>

      <Link
        to={"/products"}
        className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded text-white font-bold my-10"
      >
        Volver a Productos
      </Link>
    {product &&(

      <FormEditProduct id={id} product={product} />
    )}
    </>
  );
}
