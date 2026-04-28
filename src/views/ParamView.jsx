import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParamView() {

    const parametro = useParams()
    const id = parametro.id


  return (
    <div className='text-5xl font-black'>{id}</div>
  )
}
