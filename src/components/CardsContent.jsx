import React from 'react'
import Cards from './Cards'

const CardsContent = () => {
  return (
    <div>
        <p>Menu del día</p>
        <div className='card-content'> 
        
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>


        </div>
    </div>
  )
}

export default CardsContent