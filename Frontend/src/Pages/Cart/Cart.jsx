import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer/Footer';
import CartCard from '../../Components/Card/CartCard';
import { BsCartDashFill } from "react-icons/bs";
import { CartOfUser,addItemtoCart, decreaseQuantityFromCart } from '../../Services/Cart';
import CheckOutModal from '../../Components/Modal/CheckOutModal';

const Cart = ({cart,setCart,handleClear, handleDelete }) => {
  const [cartProduct, setCartProduct] = useState(cart);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const fetchCart = async () => {
      const data = await CartOfUser();
      console.log(data)
      if (data) {
        setCartProduct(data);
        setLoading(false)
      }
    };
    fetchCart();
  }, [cart]);

  const handleInc = async(id) => {
    let cart = {...cartProduct}; 
    const data = await addItemtoCart(id,1);
    const item = cartProduct.items.filter((c)=>c.product._id===id);
    const index = cartProduct.items.findIndex((c)=>c.product._id===id);
    item[0].quantity++;
    const price = item[0].product.price;
    cart.items[index] = item[0];
    cart.totalPrice = cart.totalPrice + price;
    setCartProduct(cart);
    

  }

  const handleDec = async(id) => {
    let cart = {...cartProduct};
    console.log(cart.items.filter(c=>c.product._id!==id)) 
    const data = await decreaseQuantityFromCart(id);
    const item = cartProduct.items.filter((c)=>c.product._id===id);
    const index = cartProduct.items.findIndex((c)=>c.product._id===id);
    item[0].quantity--;
    if(item[0].quantity>0){

      const price = item[0].product.price;
      cart.items[index] = item[0];
      cart.totalPrice = cart.totalPrice - price;
      setCartProduct(cart);
    }else{
      handleDelete(id)
    }
  }

  const handleOpenModal = async()=>{
    setIsOpen(true);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='w-10/12 text-center m-auto flex flex-col justify-center items-center gap-4 my-10 max-sm:w-full'>
        <h1 className='font-bold text-7xl '>Your Cart</h1>
        {cartProduct.items.length==0?<p>No item In Cart</p>:
        <>
        <div className='flex justify-center items-center bg-red-600 gap-3 w-24 hover:bg-red-700 cursor-pointer transition-all duration-300 hover:scale-110 text-white p-3 rounded-lg ' onClick={handleClear}>
          <p>Clear</p>
          <BsCartDashFill size={25} />
        </div>
        <div className='w-full flex rounded-lg p-5 justify-around max-lg:flex-col gap-4 max-lg:items-center '>
          <section className='max-lg:w-full'>
            {cartProduct.items.map((product,i) => (
              <CartCard
                key={i}
                product={product}
                handleDelete={handleDelete}
                handleDec={handleDec}
                handleInc={handleInc}
              />
            ))}
          </section>
          <section className='border-l-[1px] border-black/30 p-3 max-lg:gap-4 flex flex-col justify-between max-lg:w-full max-lg:border-none '>
            {
              cartProduct.items.map(product => (
                <div className='text-black font-semibold flex justify-between gap-5 max-lg:gap-8' key={product.product._id}>
                  <p>{product.product.name}</p>
                  <p className='text-black/40'>x {product.quantity}</p>
                  <p className='text-green-500'>$ {product.product.price}</p>
                </div>
              ))
            }
            <div className="w-full h-[1px] my-5 bg-black opacity-30" ></div>
            <p className='font-semibold '>Total Price : <span className='ml-5 text-green-500'>$ {cartProduct.totalPrice}</span></p>
            <button onClick={handleOpenModal} className='bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-600 transition-all duration-300 hover:scale-105 mt-5'>Checkout</button>
          </section>
        </div>
        </>
        }

      </div>
      <CheckOutModal setIsOpen = {setIsOpen} modalIsOpen={modalIsOpen} setCart={setCart} ></CheckOutModal>
      <Footer />
    </>
  );
}

export default Cart;




  //   const filterProduct = ()=>{
  //     let Ap=[];
  //     let total = 0;
  //     cart.forEach(item=>{
  //       const product = Products.find(p=>p.id===item);
  //       //if the Product of Particular Id is ALready in Ap then Only make its Quantity +1
  //       if(Ap.find(p=>p.id===product.id)){
  //         const index = Ap.findIndex(p=>p.id===product.id);
  //         Ap[index].quantity++;
  //         total = total+Ap[index].price;
  //       }
  //       else{
  //         //if the Product of Particular Id is Not in Ap then Add it to Ap with Quantity
  //         Ap.push({...product,quantity:1});
  //         total = total+product.price;
  //       }
  //     }
  //   )
  //   setTotalPrice(total);
  //   setCartProduct(Ap);
  // }

  //   filterProduct();