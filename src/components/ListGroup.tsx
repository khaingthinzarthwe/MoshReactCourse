import { useState } from "react";

//{ items: [], heading:  string }
interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0] //variable (selectedIndex)
  //arr[1] //updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
