import React from 'react'

export default function ProductoComponent(props) {
  return (
    <div className='w-1/3 m-5 p-3 border-2 rounded bg-amber-200'>
        <div className='flex gap-10'>
            <h1>Producto: {props.name}</h1>
            <h1>Precio: {props.precio}</h1>
            <h1>Id: {props.id}</h1>
        </div>
    </div>
  )
}
