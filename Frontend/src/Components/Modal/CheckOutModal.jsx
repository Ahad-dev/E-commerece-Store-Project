import React,{useState,useEffect} from 'react'
import { RxCross2 } from 'react-icons/rx';
import Modal from "react-modal";
import { createOrder } from '../../Services/Order';


const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

const CheckOutModal = ({setIsOpen,modalIsOpen,setCart}) => {
  const [shippingAddress,setShippingAddress]  =useState("")
  const closeModal = () => {
    setIsOpen(false);
    setShippingAddress(" ");
  };
  const handleCheckOut = async()=>{
    const data = await createOrder(shippingAddress)
    console.log(data);
    setCart({ items: [], totalPrice: 0 })
    closeModal();
  }

  return (
    <Modal
    isOpen={modalIsOpen}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Address Modal"
    ariaHideApp={false} // Ensure accessibility
  >
    <div className="flex flex-col gap-5">
      <RxCross2
        onClick={closeModal}
        className="absolute top-3 right-3 cursor-pointer"
        size={30}
      />
      <h2 className="text-2xl font-bold">CheckOut Your Order</h2>
      <input
        placeholder="Shipping Address"
        type="text"
        className="font-bold px-2 py-3 outline-none text-2xl border-b-2 border-black/15 rounded-lg"
        value={shippingAddress}
        onChange={({ target }) => setShippingAddress(target.value)}
      />
      
      <button
        type="button"
        className="bg-blue-500 py-4 px-2 text-center text-white font-bold rounded-lg"
        onClick={handleCheckOut}
      >
        CheckOut
      </button>
    </div>
  </Modal>
  )
}

export default CheckOutModal