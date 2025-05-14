
import { useState } from 'react';
import API from './api';

export default function AddItem() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addItem = async () => {
    try {
      await API.post('/items', { name, description });
      alert('Item added!');
    } catch {
      alert('Failed to add item');
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Description" onChange={e => setDescription(e.target.value)} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
