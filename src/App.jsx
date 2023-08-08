import "./App.css";
import Hello from "./component/Hello";
import Choice from "./component/Choice";
import Start from "./component/Start";
import FirstPage from "./component/FirstPage";
import Footer from "./base/Footer";
import Signup from "./component/Signup";
import Readsns from "./component/Readsns";

function App() {
  return (
    <div className="App">
      <Hello />
      <Choice />
      <Start />
      <FirstPage />
      <Footer />
      <Login />
      <Signup />
      <Readsns />
    </div>
  );
}

export default App;
