import React from 'react'
import Cards from './Cards'

const CardsContent = () => {
  return (
    <div>
        <p>Menu del día</p>
        <div className='card-content'> 
        
            <Cards foto='plato2' titulo='Rice and Beans'/>
            <Cards foto='plato1' titulo='Vigorón de costilla ahumada'/>

        </div>
    </div>
  )
}

export default CardsContent