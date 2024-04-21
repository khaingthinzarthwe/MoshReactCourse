import { useState } from "react";

interface Props {
    items: string[],
    colors: string[],
    heading1: string,
    heading2: string,
    onSelectItem: (item: string) => void;
}

function ListGroupGoeun({ items, colors, heading1, heading2, onSelectItem }: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading1}</h1> <h2>{heading2}</h2>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : `list-group-item ${colors[index]}`  
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupGoeun;
