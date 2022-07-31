import './App.css';
import { Users } from './users'

function App() {
  return (
    <div className="app">
      <input
        class="search"
        placeholder="Search..."
        type="text"
      />
      <ul class="list">
        {Users.map((user) => (
          <li key={user.id} class="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
