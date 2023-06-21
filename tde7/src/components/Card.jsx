import React from 'react'
import './Card.css'

const Card = ({ todos }) => {
  return (
    <div className='card-container'>
        <h1>{todos.title}</h1>
        {todos.completed === false ? <button style={{backgroundColor: "red", color: "white"}} disabled>A ser Concluido</button> : <button style={{backgroundColor: "green", color: "white"}} disabled>Concluído</button>}
    </div>
  )
}

export default Card