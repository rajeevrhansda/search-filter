import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Table from './Table';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async ()=>{
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    }
    if(query.length === 0 || query.length > 2) fetchUsers();
  },[query])

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;