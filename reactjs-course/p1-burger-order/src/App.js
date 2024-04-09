import logo from "./logo.svg";
import "./App.css";

import { Button } from "./components/Button";
import { Comment } from "./components/Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My Component Library</p>

        <div>
          <Comment by="Tom" />
        </div>

        {/* <div>
          <Button variant="Primary" />
          <Button variant="Secondary" />
          <Button variant="Destructive" />
          <Button variant="Outlined" />
          <Button variant="Ghost" />
          <Button variant="Link" />
        </div> */}
      </header>
    </div>
  );
}

export default App;
