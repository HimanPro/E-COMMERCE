import React, { useState } from 'react';
import wishListConstext from './WishListContext';

const WishListState = (props) => {
  const [wishListProduct, setwishListProduct] = useState('');
  const HandelWishlist = (product) => {
    let copyarr = [...wishListProduct]
    copyarr.push(product)
    setwishListProduct(copyarr)

}
  return (
    <wishListConstext.Provider value={{wishListProduct, setwishListProduct, HandelWishlist}}>
      {props.children}
    </wishListConstext.Provider>
  );
}

export default WishListState;
