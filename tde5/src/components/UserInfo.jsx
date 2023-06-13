import React from 'react'
import './UserInfo.css'

const UserInfo = ({nome , birthday, email}) => {
  return (
    <div className='containerHome'>
        <div className="container">
        <h1>Nome: {nome}</h1>
        <p>Data de Aniversário: {birthday}</p>
        <p>E-mail: {email}</p>
        </div>
    </div>
  )
}

export default UserInfo