import "./App.css";
import CreateSnipet from "./components/CreateSnipet";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-gray-900 text-white py-5">
        <CreateSnipet />
      </div>
    </>
  );
}

export default App;
