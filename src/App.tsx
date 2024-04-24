import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5
  })

  const handlleClick = () => {
    // drink.price = 6;
    // const newDrink = {
    //   title: drink.title,
    //   price: 6
    // }
    setDrink({ ...drink, price: 6 });
  }

  return (
    <div>
      {drink.price}
      <button onClick={handlleClick}>Click Me</button>
    </div>
  );
}

export default App;
