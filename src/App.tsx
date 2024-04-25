import { useState } from "react";

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handlleClick = () => {
    //Add
    setTags([ ...tags, 'exciting' ])
   
    //Remove
    setTags(tags.filter(tag => tag !== 'happy'))
   
    //Update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag ))
    console.log(tags);
  };

  return (
    <div>
      <button onClick={handlleClick}>Click Me</button>
    </div>
  );
}

export default App;
