import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-stretch grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
