import { useState, useEffect } from "react";

import List from "../List";
import Search from "../Search";
import "./App.css";

const data = ["html", "JavaScript", "css", "typescript", "Vue", "React"];

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(
      data.filter((el) => el.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course
        </Search>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
