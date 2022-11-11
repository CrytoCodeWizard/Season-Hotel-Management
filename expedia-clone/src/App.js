import "./App.css";

import Footer from "./Components/Footer";
import NavBar from "./Components/navbar";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
