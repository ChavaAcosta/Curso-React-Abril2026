const apiUrl = "https://crud-curso-react-26.onrender.com/api";
export const getProducts = async () => {
    try {
        const response = await fetch(`${apiUrl}/products`); 
        console.log("esta es mi primera respuesta",response)
        const data = await response.json();
        console.log("esta es mi data",data)
        return data;
    } catch (error) {
        console.error("Erro al obtener datos", error)
        return [];
    }
}

export const getByProductId = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/products/${id}`)
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error al crear producto", error)
        return null;
    }
}

export const createProduct = async (product) => {
    try {
        const response = await fetch(`${apiUrl}/products`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error al crear producto", error)
        return null;
    }
}


export const updateProduct = async (id, product) => {
    try {
        const response = await fetch(`${apiUrl}/products/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error al crear producto", error)
        return null;
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/products/${id}`,{
            method: 'DELETE'
        })
        return response.ok;

    } catch (error) {
        console.error("Error al crear producto", error)
        return null;
    }
}