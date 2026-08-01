import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer/index.js";
import MenuDirectoryPage from "./pages/MenuDirectoryPage";
import MenuDetailPage from "./pages/MenuDetailPage";
import "./App.css";
import Maids from "./pages/Maids";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="maids" element={<Maids />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="menu" element={<MenuDirectoryPage />} />
          <Route path="menu/:menuId" element={<MenuDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
