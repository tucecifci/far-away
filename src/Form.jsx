import React, { useState } from "react";

function Form({onAddItems}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

 

  function handleSubmit(e) {
    e.preventDefault(); // sayfanın kendinden gelen yeniden yüklenme özelliğini devre dışı bırakmak için
    if (!description) return; //eğer item kısmı boşsa hiçbir şey döndürme bunu yapmazsak şöyle bir çıktı alıyoruz çünkü: 3 "" , item boş geliyor, gelince dönmemesi lazım.
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);
    setDescription(""); //itemı ekledikten sonra inputun silinmesini sağlıyor
    setQuantity("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          //20 uzunluğunda bir arr yaratıldı
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
