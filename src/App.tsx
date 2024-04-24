import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const fullName = firstName + ' ' + lastName;
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
  })
  const [loading, setLoading] = useState(false);
  
  return (
    <div>
      {/* {firstName} {lastName} */}
    </div>
  );
}

export default App;
