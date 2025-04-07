import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-5xl">Conuter with redux</h1>
      <Button className="m-3">Increment</Button>
      <h3 className="text-3xl">Count: 0</h3>
      <Button className="m-3">Decrement</Button>
    </>
  );
}

export default App;
