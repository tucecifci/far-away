import { useState } from 'react'
import './App.css'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
     <Logo />
     <Form />
     <PackingList />
     <Stats />
    
     </div>
    </>
  )
}

export default App
