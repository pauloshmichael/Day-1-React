// import React from 'react'

function Dish({ name, price }) {
  return (
    

    <div>
    <section className="dish" >
        <div className="dish-title">
          <h3>{name}</h3>
          <p>{price} ETB</p>
        </div>
      
    </section>
    
    </div>


  )
}

export default Dish
