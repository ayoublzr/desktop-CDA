import { Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/products/Products";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Devis from "./pages/Devis/Devis";
import Categories from "./pages/Categories/Categories";
import Utilisateurs from "./pages/Users/Utilisateurs";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isResetPasswordPage = location.pathname === "/resetpassword";
  const showSidebar = !isLoginPage && !isResetPasswordPage; // Afficher la SidebarMenu pour toutes les pages sauf la page de connexion et de réinitialisation du mot de passe

  return (
    <div className="d-flex">
      {showSidebar && <SidebarMenu />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/devis" element={<Devis />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/utilisateurs" element={<Utilisateurs />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;


