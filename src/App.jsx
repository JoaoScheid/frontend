
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ItemList from './ItemList';
import AddItem from './AddItem';
import { setAuthToken } from './api';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
    setAuthToken(token);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Simple FastAPI Frontend</h1>
      {!token ? (
        <>
          <Register />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <AddItem />
          <ItemList />
        </>
      )}
    </div>
  );
}

export default App;
