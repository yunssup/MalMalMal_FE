import "./App.css";
import Hello from "./component/Hello";
import Choice from "./component/Choice";
import Start from "./component/Start";
import FirstPage from "./component/FirstPage";
function App() {
  const name = "rin";
  return (
    <div className="App">
      {/* <Hello /> */}
      <Choice />
      {/* <Start /> */}
      {/* <FirstPage /> */}
    </div>
  );
}

export default App;
