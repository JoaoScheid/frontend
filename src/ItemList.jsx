
import { useEffect, useState } from 'react';
import API from './api';

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get('/items')
      .then(res => setItems(res.data))
      .catch(err => alert('Failed to load items'));
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}: {item.description}</li>)}
      </ul>
    </div>
  );
}
