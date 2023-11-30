import React from 'react'
import obras from '../src/data/quadros'

function pageHome() {
  return (
    <div>
      console.log(obras)
        <h1>Quadrinhos</h1>
 <div className='quadroMaior'>
    <div className='img'>

    </div>
    <div className='infos'>
     <h2>nome da obra:</h2>
     <h2>nome do artista:</h2>
     <p>clique para saber mais</p>

     <button>excluir</button>
     <button>editar</button>

     

    </div>

 </div>

    </div>
  )
}
export default pageHome