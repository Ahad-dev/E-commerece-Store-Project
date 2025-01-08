

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