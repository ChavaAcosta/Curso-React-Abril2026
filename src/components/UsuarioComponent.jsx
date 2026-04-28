import React from 'react'

export default function UsuarioComponent({nombre, edad}) {
  return (
    <div key={edad} className='flex flex-col gap-y-5 border-2 rounded-xl self-center justify-self-center px-20'>
        <p>{nombre}</p>
        <p>{edad}</p>
    </div>
  )
}
