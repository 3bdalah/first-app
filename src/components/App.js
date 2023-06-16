import React,{ useState } from "react";
import PackingList from "./PackingList";
import Form from "./Form";
import Logo from "./Logo";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  
  //  handle add  new item 
  function handleAddItem(newItem){
     setItems((items)=> [...items,newItem]);
  }
  
  //  handle delete item 
  function handleDeleteItem (id){
    setItems((items) => items.filter((item) => item.id !== id ));
  }

  // handle toggle cheke box 
  function handleToggleItem(id){
    setItems((items) =>  items.map((item) => item.id === id ? {...item,packed : !item.packed} : item ));
  }

  // handle clear items 
  function handlecleatItems (){
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} onDeleteItem ={handleDeleteItem}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onDeleteAll={handlecleatItems}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
