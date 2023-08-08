import "./App.css";
import Hello from "./component/Hello";
import Choice from "./component/Choice";
import Start from "./component/Start";
import FirstPage from "./component/FirstPage";
import Footer from "./base/Footer";
function App() {
  return (
    <div className="App">
      <Hello />
      <Choice />
      <Start />
      <FirstPage />
      <Footer />
      <Login />
    </div>
  );
}

export default App;
