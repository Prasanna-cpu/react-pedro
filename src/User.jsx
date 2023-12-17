import React from 'react'

const User =(props)=> {

    const name=props.name;
    const email=props.email;
    const favourite=props.favourite
  return (
    <div>

        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Favourite:{favourite}</h1>

    </div>
  )
}


export default User