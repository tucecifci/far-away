import { useState } from 'react'
import './App.css'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

function App() {
  
  const [count, setCount] = useState(0)
  const [items, setItems] = useState([]);


  function handleAddItems(item) {
    setItems((items) => [...items, item]); //burada push gibi metotlar kullanamayız çünkü immütabilite ilkesine uymamız gerekir, yani bir arrayin orjinalini bozmadan yeni bir item eklememiz lazım, bunun için spread operatörü kullanıyoruz.
  }

function handleDeleteıtem(id){
  setItems(items=>items.filter(item=>item.id !== id))
}

function handleToggleItem(id){
setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
}

function handleClearList(){
const confirmed = window.confirm("Are you sure you want to delete all items?");

  if(confirmed) setItems([]);
}

  return (
    <>
    <div className='app'>
     <Logo />
     <Form onAddItems= {handleAddItems} />
     <PackingList items={items} onDeleteItem={handleDeleteıtem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
     <Stats items={items} />
    
     </div>
    </>
  )
}

export default App
