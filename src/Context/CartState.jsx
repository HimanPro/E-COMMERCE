import React, { useState } from 'react';
import cartContext from './CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartState = (props) => {
  let navigate = useNavigate()
  let data = JSON.parse(localStorage.getItem('Login'))
  console.log(data);
  let cart = JSON.parse(localStorage.getItem('Cart'))
    const [cartArr, setcartArr] = useState(cart ? cart : []);
    const [login, setlogin] = useState(data ? data : false);
    console.log(login);
    const HandelAddtoCart = (ele)=>{
        let checkCartItem = cartArr.find((product)=>ele.id===product.id)
        if(checkCartItem){
        return 
        }
        else{
          let updateObj = {...ele, quantity:1}
          let copyCartArr = [...cartArr, updateObj]
          localStorage.setItem('Cart', JSON.stringify(copyCartArr))
          setcartArr(copyCartArr)
          
        }
      }
      const HandelRemovetoCart = (ele, i)=>{
        let copyArr = [...cartArr]
        copyArr.splice(i, 1)
        setcartArr(copyArr)
      }

     const HandelLogout = ()=>{
      setlogin(false)
      localStorage.removeItem('Login')
      navigate('/login')
      toast.warn("You are now logged out. Please login again to access your account.", {
        position:'top-right',
        theme:'dark'
      })

     }

    return (
        <cartContext.Provider value={{cartArr, setcartArr, HandelAddtoCart, HandelRemovetoCart, HandelLogout, login, setlogin}}>
            {props.children}
        </cartContext.Provider>
    );
}

export default CartState;
