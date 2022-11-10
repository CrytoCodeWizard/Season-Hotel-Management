import "./App.css";
import Navbar from "./Components/navbar";
import Homepage from "./Pages/HomePage"
import SimpleCard from "./Components/SimpleCard";
function App() {
  return <div className="App">
<Navbar></Navbar>
{/* <Homepage></Homepage> */}
<SimpleCard
      src='https://images.trvl-media.com/hotels/1000000/870000/860900/860842/cff670cd.jpg?impolicy=resizecrop&rw=455&ra=fit'
      title='JW Marriott Mumbai Juhu'
      city='Mumbai'
      description='INR 3000 Hotel Credit, Complimentary Breakfast, 20% Discount on Spa, 15% off Food & Beverage, Laundry & more.'
      rating='4.3/5'
      price='Rs11,500'
      text1='Indulgent Staycation at The Best Address'
    />
  </div>;


}

export default App;
