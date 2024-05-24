import React from 'react'
import Cards from './Cards'

const CardsContent = () => {
  return (
    <div>
        <p>Menu del día</p>
        <div className='card-content'> 
            <Cards foto='plato3' titulo='Cevice Pescado o Mixto-Camarón' plato_del_dia />
            <Cards foto='plato1' titulo='Vigorón de costilla ahumada' />
            <Cards foto='plato2' titulo='Rice and Beans' />

        </div>
    </div>
  )
}

export default CardsContent