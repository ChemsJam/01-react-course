import React, { useState } from 'react'

export const FirstComponent = () => {

    // let name = "Johan"
    let web = "JAlex.dev"

    const [name, setName] = useState("Johan")

    let projects = [
        "my-django-portfolio",
        "api-crud-react",
        "api-rest-django",
        "api-django-tokens-auth",
        "react-movies"
    ]

    const ChangeName = (newName) => {
        setName(newName)
    }
  return (
    <div>
        <h1>Componente 1</h1>

        <p>Parrafo del componente</p>
        <p>Mi nombres es: <strong className={name.length >= 4 ? 'verde' : 'rojo'}>{name}</strong></p>
        <p>Mi web es: {web}</p>

        <input type='text' onChange={e => ChangeName(e.target.value)} placeholder='Cambia el nombre'></input>
        <button onClick={ e => ChangeName("JOHAN DEVELOPER")}>Change the name with a click</button>

        <h2>Proyectos</h2>
        <ul>
            {
                projects.map((project, id) => {
                    return (
                        <li key={id}>{project}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
