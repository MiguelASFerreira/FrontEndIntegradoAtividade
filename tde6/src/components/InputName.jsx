import React, { useState } from 'react'

const InputName = () => {
  const [texto, setTexto] = useState("")
  const [showValue, setShowValue] = useState(false)

  const handleShowValue = () => {
    setShowValue(!showValue)
  }
  return (
    <div>
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={handleShowValue}>Exibir</button>
      {showValue ? <h4>{texto}</h4> : <></>}
    </div>
  )
}

export default InputName