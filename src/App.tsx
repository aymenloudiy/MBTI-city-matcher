import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center items-stretch grow">
        <Outlet />
      </div>
      <ToTop />
      <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />

      <Footer />
    </div>
  );
}

export default App;
