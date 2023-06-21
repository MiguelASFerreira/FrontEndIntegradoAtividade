import React, { useState } from 'react'


const ArraySort = () => {
 const number = [1,43,62,45,1,3,57,523,3,6,8];
 const [array, setArray] = useState(number);

 const ordenar = () => {
  const arrayOrdenado = [...array].sort((a, b) => a - b)
  setArray(arrayOrdenado)
}
  return (
    <div>
        <h3>{array + " "}</h3>
        <button onClick={ordenar}>Ordenar</button>
    </div>
  )
}

export default ArraySort