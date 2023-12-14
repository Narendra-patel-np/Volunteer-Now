import "./App.css";
import Navbar from "./components/navbar";
import MainRoutes from "./components/routes/MainRoutes";
function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
