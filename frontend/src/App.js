import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import MainRoutes from "./components/routes/MainRoutes";
function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
