import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import data from "./model/data";
import DeviceGrid from "./components/DeviceGrid";
import Siderbar from "./components/Navbar/Siderbar";

function App() {
  return (
    <div>
     
      {/* <Navbar />
      <DeviceGrid devices={data} />
      <Footer /> */}
       

      {/* Login */}
      <Siderbar />
    </div>
  );
}

export default App;
