import Footer from "./components/footer";
import Navbar from "./components/navbar";
import deviceData from "./model/list";
import DeviceGrid from "./components/DeviceGrid";

function App() {
  return (
    <div>
      <Navbar />
      <DeviceGrid devices={[deviceData]} />   
      <Footer />
    </div>
  );
}

export default App;
