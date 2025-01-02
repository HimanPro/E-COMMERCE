import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CartState from "./Context/CartState"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import WishListState from "./Context/WishListState";


function App() {

  return (
    <>
   <WishListState>
   <CartState>

<Navbar/>
 <Outlet/>
 <Footer/>
 <ToastContainer/>
 
</CartState>
   </WishListState>
   
    </>
  )
}

export default App
