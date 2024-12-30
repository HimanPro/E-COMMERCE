import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ViewDetails from './Pages/ViewDetails.jsx'
import Cart from './Pages/Cart.jsx'
import CheckOut from './Pages/CheckOut.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'

// import CartState from './Context/CartState.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/view' element={<ViewDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
 
   <RouterProvider router={router}/>

)
