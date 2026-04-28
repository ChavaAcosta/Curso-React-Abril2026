import React from 'react'

export default function ButtonActionComponent({onClick}) {
  return (
    <button 
        className='button-simple' 
        onClick={onClick}
    >
            Hazme click
    </button>
  )
}
