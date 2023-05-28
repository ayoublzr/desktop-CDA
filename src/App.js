import { Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import { Link } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="d-flex">
     
      <SidebarMenu/>
      <Routes>
        <Route path="/products" element={<Products />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
