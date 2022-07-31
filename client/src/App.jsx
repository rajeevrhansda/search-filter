import { useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={[]} />
    </div>
  );
}

export default App;