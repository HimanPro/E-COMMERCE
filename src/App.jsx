import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import CartState from "./Context/CartState"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
   <CartState>

   <Navbar/>
    <Outlet/>
    <Footer/>
    <ToastContainer/>
    
   </CartState>
   
    </>
  )
}

export default App
