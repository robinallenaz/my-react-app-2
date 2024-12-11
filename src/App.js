// Importing React and useState hook
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Sample test data initialized as an array of objects
const TEST_DATA = [
  { id: 1, name: 'Item 1', completed: false },
  { id: 2, name: 'Item 2', completed: true },
  { id: 3, name: 'Item 3', completed: false }
];

// Component to render the list of items
const ItemList = ({ items, onToggle, onDelete }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        {item.name} <button onClick={() => onToggle(item.id)}>{item.completed ? 'Uncomplete' : 'Complete'}</button> <button onClick={() => onDelete(item.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

function App() {
  // Declaring state variable 'list' with initial value from TEST_DATA
  const [list, setList] = useState(TEST_DATA);
  
  // Function to add a new item with static data
  const addItem = () => {
    const newItem = { id: list.length + 1, name: `Item ${list.length + 1}`, completed: false };
    setList([...list, newItem]);
  };

  // Function to delete an item by id
  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  // Function to toggle the 'completed' status of an item
  const toggleCompleted = (id) => {
    setList(list.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={addItem}>Add Item</button>
        <ItemList items={list} onToggle={toggleCompleted} onDelete={deleteItem} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
