import React, { useEffect, useState } from 'react'
import OrderCard from '../../../Components/Card/OrderCard'
import { orderHistory} from "../../../Services/Order";


const OrderHistory = () => {


  const [orderhistory,setOrderHistory] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{

    const fetchOrderHistory = async()=>{
      const data = await orderHistory();
      setOrderHistory(data);
      setLoading(false)
    }
    fetchOrderHistory();
  },[])

  return (
    <>
    <h1 className='font-bold text-6xl text-center'>Ordering History</h1>
    {loading?<p>Loading...</p>:orderhistory.map(product=>(
      <>
      <OrderCard product={product} key={product.id}></OrderCard>

      </>
    ))}
   </>
  )
}

export default OrderHistory