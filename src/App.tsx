import { useState } from "react";

function App() {
  //[false, true]
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);
  // let count = 0;

  const handleClick = () => {
    setVisibility(true);
    // setName('Yoh');
    // count++;
    console.log(isVisible);
  };
  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
