import Header from './component/Header'
import Dish from './component/Dish'
import { dishes } from './data/dishes'
import './Css/style.css'

function App() {


  return (
    <div>
      <Header />
      <main>
        <h2>Today's Menu</h2>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            name={dish.name}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </main>
    </div>
  )
}

export default App
