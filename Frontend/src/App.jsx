import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import Layout from "./Pages/Profile/Layout";
import ELayout from "./Pages/ELayout";
import PersonalInformation from "./Pages/Profile/PersonalInformation/PersonalInformation";
import OrderHistory from "./Pages/Profile/OrderHistory/OrderHistory";
import FavouriteProducts from "./Pages/Profile/FavouriteProducts/FavouriteProducts";
import ALayout from "./Pages/Admin/ALayout";
import Users from "./Pages/Admin/Users/Users";
import Orders from "./Pages/Admin/Orders/Orders";
import { AuthProvider } from "./Context/AuthContext";
import UserProtectedRoute from "./routes/UserProtectedRoute";
import { addItemtoCart, CartOfUser, DeleteItemFromCart, RemoveCart } from "./Services/Cart";
import {Toaster,toast} from 'react-hot-toast'

const App = () => {
  const [user,setUser] = useState({

    _id:"",
    username:"",
    email:"",
  })

  const [cart, setCart] = useState({ items: [], totalPrice: 0 });

  useEffect(() => {
    console.log(user)
    const fetchCart = async () => {
      console.log(cart)
      const data = await CartOfUser();
      if (data) {
        setCart(data);
      }
    };
    fetchCart();
  }, []);

  const handleCart = async (id) => {
    const data = await addItemtoCart(id, 1);
    toast.success("Added to Cart")
    console.log(data);
    setCart(data);
  };
  const handleDelete = async(id) => {
    let cartP = {...cart};
    await DeleteItemFromCart(id)
    toast.success("Deleted from Cart")
    let newitems = cartP.items.filter(c=>c.product._id!==id);
    newitems = cartP.items.filter(c=>c.product!==id);
    console.log(newitems)
    setCart({...cart,items:newitems});
  };

  const handleClear = async() => {
    await RemoveCart()
    toast.success("Cart Cleared")
    setCart({ items: [], totalPrice: 0 });
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<ELayout cart={cart} />}>
            <Route path="/" exact element={<Home handleCart={handleCart} />} />
            <Route
              path="/shop"
              exact
              element={<Shop handleCart={handleCart} />}
            />
            <Route
              path="/cart"
              exact
              element={
                <Cart
                setCart={setCart}
                  cart={cart}
                  handleClear={handleClear}
                  handleDelete={handleDelete}
                />
              }
            />
            <Route path="/login" exact element={<Login setUser = {setUser} />} />
            <Route path="/signup" exact element={<SignUp setUser = {setUser} />} />
          </Route>
          <Route element={<Layout />}>
            <Route
              path="/PersonalInformation"
              element={<UserProtectedRoute user={user} setUser={setUser} element={PersonalInformation} />}
            />
            <Route
              path="/OrderHistory"
              element={<UserProtectedRoute element={OrderHistory} />}
            />
            <Route
              path="/FavouriteProducts"
              element={<UserProtectedRoute handleCart ={handleCart} element={FavouriteProducts} />}
            />
          </Route>
          <Route element={<ALayout />}>
            <Route path="/Admin/Users" exact element={<Users />} />
            <Route path="/Admin/Orders" exact element={<Orders />} />
          </Route>
        </Routes>
      </Router>
      <Toaster/>
    </AuthProvider>
  );
};

export default App;
