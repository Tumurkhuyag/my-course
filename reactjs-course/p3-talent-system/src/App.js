import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  return (
    <div className="flex flex-col space-y-5 justify-center items-center min-h-screen">
      <Button>Shadcn Button</Button>
      <Input type="email" placeholder="Email" />
    </div>
  );
}

export default App;
