import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length}></Navbar>
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}></Cart>
    </div>
  );
}

export default App;
