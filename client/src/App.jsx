import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin/admin-layout";
import Dashboard from "./pages/admin-view/Dashboard";
import Products from "./pages/admin-view/Products";
import Feature from "./pages/admin-view/Feature";
import Orders from "./pages/admin-view/Orders";
import ShoppingLayout from "./components/shopping-view/ShoppingLayout";
import NotFoundPage from "./pages/not-found";
import Home from "./pages/shopping-view/Home";
import Listing from "./pages/shopping-view/Listing";
import Checkout from "./pages/shopping-view/Checkout";
import Account from "./pages/shopping-view/Account";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Admin related goes here... */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="features" element={<Feature />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        {/* Shopping Related goes here... */}
        <Route path="/shop" element={<ShoppingLayout />}>
          <Route path="" element={<Home />} />
          <Route path="list" element={<Listing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
