export const createOrder = async(body)=>{
    try {
        const response = await fetch(`http://localhost:5000/api/orders/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({shippingAddress:body})
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
}

export const orderHistory =async()=>{
    try {
        const response = await fetch(`http://localhost:5000/api/orders/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('token')
            }
        });
        return response.json();
    } catch (error) {
        console.log(error)
    }
} 