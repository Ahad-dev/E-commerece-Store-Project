export const  addItemtoCart = async(productId,quantity)=>{
    console.log(localStorage.getItem("token"))
    const res = await fetch("http://localhost:5000/api/cart",{
        method:"POST",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
            "Content-type":"application/json",
            'x-auth-token':localStorage.getItem("token")
        },
        body:JSON.stringify({productId,quantity})
    }) 
    return res.json()
}

export const decreaseQuantityFromCart = async(productId)=>{
    const res = await fetch("http://localhost:5000/api/cart",{
        method:"PUT",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
            "Content-type":"application/json",
            'x-auth-token':localStorage.getItem("token")
        },
        body:JSON.stringify({productId})
    }) 
    return res.json()
}

export const DeleteItemFromCart = async(productId)=>{
    const res = await fetch("http://localhost:5000/api/cart",{
        method:"DELETE",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
            "Content-type":"application/json",
            'x-auth-token':localStorage.getItem("token")
        },
        body:JSON.stringify({productId})
    }) 
    return res.json()
} 

export const CartOfUser = async()=>{
    const res = await fetch("http://localhost:5000/api/cart",{
        method:"GET",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
            "x-auth-token":localStorage.getItem("token")
        }
    })
    if(!res.ok){
        return {items:[],totalPrice:0}
    }
    return res.json();
}

//Remove Cart
export const RemoveCart = async()=>{
    const res = await fetch("http://localhost:5000/api/cart/clear",{
        method:"DELETE",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
            "x-auth-token":localStorage.getItem("token")

        }
        
    })
    return res.json();

}