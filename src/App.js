import { Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Devis from "./pages/Devis/Devis";
import Categories from "./pages/Categories/Categories";
import Utilisateurs from "./pages/Users/Utilisateurs";

function App() {
  return (
    <div className="d-flex">
     
      <SidebarMenu/>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
      </Routes>
    </div>
  );
}

export default App;
