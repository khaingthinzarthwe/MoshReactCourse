import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    // pizza.toppings.push("Cheese");
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    console.log(pizza);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
