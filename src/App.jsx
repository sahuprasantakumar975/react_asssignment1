import Dashboard from "./components/dashboard/Dashboard";
import UserGateway from "./components/adminpanel/UserGateway";
import CurrentYear from "./components/CurrentYear";
import Button from "./components/common/Button";
import Input from "./components/common/Input";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <>
    <h2>Task 1</h2>
      <Dashboard />
      <h2>Task 2</h2>
      {/* <Button/> */}
      <Navbar />
      <Input />
      <Footer />
      <h2>Task 3</h2>
      <UserGateway />
      <h2>Task 4</h2>
      <CurrentYear />
    </>
  );
}

export default App;