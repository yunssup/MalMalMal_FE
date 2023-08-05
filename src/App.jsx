import "./App.css";
import Hello from "./component/Hello";
import Choice from "./component/Choice";
import Start from "./component/Start";
function App() {
  const name = "rin";
  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <Choice /> */}
      <Start />
    </div>
  );
}

export default App;
