import ListGroupGoeun from "./components/ListGroupGoeun";

function App() {
  let items = [
    "Cheese in the Trap",
    "Guardian: The Lonely and Great God",
    "The King: Eternal Monarch",
    "Yumis Cells",
    "Yumis Cells S2",
    "Little Women",
  ];
  let colors = [
    "list-group-item-primary",
    "list-group-item-secondary",
    "list-group-item-success",
    "list-group-item-danger",
    "list-group-item-warning",
    "list-group-item-info",
  ];
  return (
    <div>
      <ListGroupGoeun
        items={items}
        colors={colors}
        heading1="Kim Go Eun"
        heading2="Series"
        onSelectItem={(item: string) => console.log(item)}
      />
    </div>
  );
}

export default App;
