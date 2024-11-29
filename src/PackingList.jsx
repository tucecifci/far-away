import React, { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function PackingList({items, onDeleteItem, onToggleItem, onClearList} ) {
const [sortBy, setSortBy] = useState("input");
let sortedItems;
if(sortBy === "input") sortedItems = items;
if(sortBy === "description") sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
if(sortBy === "packed") sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item } onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id}/>
        ))}
      </ul>

      <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
      </div>
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
