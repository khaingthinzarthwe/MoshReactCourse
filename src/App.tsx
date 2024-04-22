import ListGroup from "./components/ListGroup";
import { useState } from "react";
import './App.css'

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={(item: string) => console.log(item)}
      />
    </div>
  );
}

export default App;
