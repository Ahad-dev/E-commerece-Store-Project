
export const regsiter = async(body)=>{
    const res = await fetch("http://localhost:5000/api/auth/register"
    ,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    }
    )
    const data = await res.json();
    console.log(data);


    return data
}

export const LoginUser = async(body)=>{
    const res = await fetch("http://localhost:5000/api/auth/login"
        ,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        }
    )
    const data = await res.json();
    return data;
}

export const verifyToken =()=>{
    let token = localStorage.getItem("token");
    if(token){
        return true
    }else{
        return false
    }
}


export const sendVerificationCode = async()=>{
    //get email from local storage
    let email = localStorage.getItem("user");

    const res = await fetch("http://localhost:5000/api/auth/sendVerificationCode",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email})
    })

    const data = await res.json();

    return data;

}

export const verifyEmail = async(code)=>{
    // code go as request body
    const res = await fetch("http://localhost:5000/api/auth/verify",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({code})
    })

    const data = await res.json();
    return data;
}