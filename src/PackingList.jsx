import React from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item } key={item.id}/>
        ))}
      </ul>
    </div>
  );

  function Item({ item }) {
    return (
      <div>
        <li><span style={item.packed ? {textDecoration: "line-through"} : {} }>
        {item.quantity} { item.description}
        </span>
        <button>❌</button>
           </li>
       
      </div>
    );
  }
}

export default PackingList;
