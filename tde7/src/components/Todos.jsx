import React, { useCallback, useEffect, useState } from 'react'
import api from '../services/api'
import './Todos.css'
import Card from './Card'

const Todos = () => {
  const [todos, setTodos] = useState([])

  const apiTodos = useCallback( async () => {
    try {
        const { data } = await api.get("/todos")
        setTodos(data)
    } catch (error) {
        console.log(error)
    }
  })

  useEffect( () => {
    apiTodos()
  },[apiTodos])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '10px 340px'}}>
        {!todos.length ? <h1>Carregando ...</h1> : todos.map(item => {
            return <Card key={item.id} todos={item} />
        })}
    </div>
  )
}

export default Todos