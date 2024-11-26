import React from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function PackingList({items, onDeleteItem, onToggleItem} ) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item } onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>
        ))}
      </ul>
    </div>
  );

  function Item({ item, onDeleteItem, onToggleItem}) {
    return (
      <div>
        <li>
          <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
          <span style={item.packed ? {textDecoration: "line-through"} : {} }>
        {item.quantity} { item.description}
        </span>
        <button onClick={()=> onDeleteItem(item.id)}>❌</button>
           </li>
       
      </div>
    );
  }
}

export default PackingList;
