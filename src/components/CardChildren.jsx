import React from 'react'

export default function CardChildren({children, titulo}) {
  return (
    <div 
      className='bg-green-400 border-2 rounded-2xl shadow-2xl p-5 flex justify-center content-center flex-col'>
      <h1>{titulo}</h1>
        {children}
      <button className='button-simple'>Soy un botón simple</button>
    </div>
  )
}
