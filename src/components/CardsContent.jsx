import React from 'react'
import Cards from './Cards'

const CardsContent = () => {
  return (
    <div>
        <p>Menu del día</p>
        <div className='card-content'> 
        
            <Cards foto='plato2'/>
            <Cards foto='plato1'/>

        </div>
    </div>
  )
}

export default CardsContent