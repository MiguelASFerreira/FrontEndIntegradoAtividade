import React, { useState } from 'react'

const InputName = () => {
  const [texto, setTexto] = useState("")

  
  return (
    <div>
      <input type="text" onChange={(e) => setTexto(e.target.value)} />
      <h4>{texto}</h4>
    </div>
  )
}

export default InputName