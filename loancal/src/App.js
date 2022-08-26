import logo from "./assets/vismaLogo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="visma-logo" />
      <h1>Loan calculator</h1>
      <h5>Use the calculator to see what a loan will cost.</h5>
    </div>
  );
}

export default App;
