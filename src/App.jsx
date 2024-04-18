import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import ProductPage from "./pages/product-page/productPage";
import ProductPageWithHook from "./pages/products-page-hook/productsPageWithHook";
import { useState } from "react";
import LoginPage from "./pages/login-page/loginPage";

function App() {
  const [isAuth , setIsAuth ] = useState(Boolean(localStorage.getItem("isAuth") || false));
  return (
  <BrowserRouter>
     <Routes>
      {/* <Route path="/" element={<ProductPage/>}/> */}
        <Route path="/" element={isAuth ? <Navigate to='/productPage'/> : <Navigate to="/login" />}/>
        <Route path="productPage" element={<ProductPageWithHook/>}/>
        <Route path="login" element={<LoginPage setIsAuth={setIsAuth} />}/>
     </Routes>
  </BrowserRouter>
  )
}

export default App;