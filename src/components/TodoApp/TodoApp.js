import {useState, useEffect} from "react"

import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"

function TodoApp(props) {

  const {phrase} = props 

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems)
  
  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }

  const handleDeleteItem = (id) => {
    setItems( items.filter((item, index) => index != id) )
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items])

  return (
  	<div className="kontajner" id="zoznam_uloh">
      <ListTodo onDeleteItem={handleDeleteItem} items={items} phrase={phrase} />
      <AddTodo onItemSubmit={handleItemSubmit} phrase={phrase} />
    </div>
  );
}

export default TodoApp;