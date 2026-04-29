import { useState } from "react";
import { createProduct } from "../services/products/productService";
import { useNavigate } from "react-router-dom";

const FormProduct = () => {
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "Omar",
    description: "",
    price: 0.0,
    category: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(data);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const respuesta = await createProduct(data);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    } finally {
      nav("/products");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white shadow p-5 max-w-xl mt-10 mx-auto"
    >
      <div>
        <label htmlFor="" className="block font-semibold">
          Nombre Producto
        </label>

        <input
          type="text"
          name="name"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa el nombre del producto"
          value={data.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="" className="block font-semibold">
          Descripción Producto
        </label>

        <input
          type="text"
          name="description"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa la descripción del producto"
          value={data.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="" className="block font-semibold">
          Categoría Producto
        </label>

        <input
          type="text"
          name="category"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa la categoría del producto"
          value={data.category}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="" className="block font-semibold">
          Precio Producto
        </label>

        <input
          type="text"
          name="price"
          className="border border-gray-200 w-full py-2 rounded-lg"
          placeholder="Ingresa el p recio del producto"
          value={data.price}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className="bg-indigo-500 w-full py-2 text-white rounded hover:bg-indigo-600 hover:cursor-pointer font-semibold"
        value={"Agregar Producto"}
      />
    </form>
  );
};

export default FormProduct;
