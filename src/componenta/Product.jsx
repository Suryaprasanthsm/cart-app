import React from 'react'

const Product = ({Product,Cart,serCart}) => {
const addcart=()=>{

}
const removecart=()=>{

}
  return (
    <>
    <div>
      {Cart.includes(Product) ?(
        <button onClick={removecart}>removecart</button>):(
        <button onClick={addcart}add to cart></button>
      )}
    </div>
    </>
  )
}

export default Product
