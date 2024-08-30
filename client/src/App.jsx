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
import CheckAuth from "./components/common/check-auth";
import UnAuthPage from "./pages/unauth-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUserAuthenticatedOrNot } from "./store/auth-slice/actions";

const App = () => {
  const dispatch = useDispatch();

  const {
    isAuthenticated,
    userInfo: user,
    isLoading,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkUserAuthenticatedOrNot());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Admin related goes here... */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="features" element={<Feature />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        {/* Shopping Related goes here... */}
        <Route
          path="/shop"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="list" element={<Listing />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/unauth-page" element={<UnAuthPage />} />
      </Routes>
    </div>
  );
};
export default App;
