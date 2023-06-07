import HomePage from "./pages/Home/HomePage";
import NavbarLogin from "./components/Utility/NavbarLogin";
import Footer from './components/Utility/Footer'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AllCategoryPage from "./pages/Category/AllCategoryPage";
import AllProductsPage from "./pages/Products/AllProductsPage";
import AllBrandsPage from "./pages/Brands/AllBrandsPage";
import ShopProductsPage from "./pages/Products/ShopProductsPage";
import ProductDetalisPage from "./pages/Products/ProductDetalisPage";
import CartPage from "./pages/Cart/CartPage";
import ChoosePayMethoudPage from "./pages/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./pages/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./pages/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./pages/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./pages/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAllAddresPage from './pages/User/UserAllAddresPage';
import UserAddAddressPage from './pages/User/UserAddAddressPage';
import UserEditAddressPage from './pages/User/UserEditAddressPage';
import UserProfilePage from "./pages/User/UserProfilePage";
import AdminEditProductsPage from './pages/Admin/AdminEditProductsPage';


function App() {
  return (
    <div className="font">
      <NavbarLogin />
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/allbrands" element={<AllBrandsPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} />
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} />

        </Routes>
      </Router>
      <Footer />
    </div>);
}

export default App;
