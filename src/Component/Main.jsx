
import Dish from './Dish'
const dishes = [
  { id: 1, name: 'Doro Wat', price: 350 },
  { id: 2, name: 'Kitfo', price: 420 },
  { id: 3, name: 'Shiro', price: 180 },
  { id: 4, name: 'Tibs', price: 380 },
]
function Main() {
  return (
    <div>
      <div className='dish-container'>
      {dishes.map((dish)=>(
        <Dish key ={dish.id} name={dish.name} price={dish.price}/>
      ))}
      </div>
    </div>
  )
}

export default Main
