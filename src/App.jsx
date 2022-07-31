import { useState } from 'react';
import './App.css';
import Table from './Table';
import { Users } from './users'

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        type="text"
        onChange={(e)=> setQuery(e.target.value)}
      />
      <Table data={Users}/>
    </div>
  );
}

export default App;
