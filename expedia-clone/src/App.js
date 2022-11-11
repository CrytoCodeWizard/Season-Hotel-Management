import "./App.css";

import Footer from "./Components/Footer";
import NavBar from "./Components/navbar";

import MainRoutes from "./Pages/MainRoutes";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
