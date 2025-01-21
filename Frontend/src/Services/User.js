export const getUser = async()=>{
    const email = localStorage.getItem("user")
    const res = await fetch("http://localhost:5000/api/user",{
        method:"POST",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
          "Content-Type":"application/json",
          "x-auth-token":localStorage.getItem("token")
        },
        body:JSON.stringify({email})
      
      })
      return res.json();

}

export const updateUser = async(body)=>{
    
    const res = await fetch("http://localhost:5000/api/user",{
        method:"PUT",
        credentials: 'include', // Ensure cookies are included in the request
        headers:{
          "Content-Type":"application/json",
          "x-auth-token":localStorage.getItem("token")
        },
        body:JSON.stringify(body)
      
      })
      return res.json();
}

//Add Product to favourite
export const AddToFavourite = async(id)=>{
  const res = await fetch(`http://localhost:5000/api/user/${id}/add`,{
    method:"PATCH",
    credentials: 'include', // Ensure cookies are included in the request
    headers:{
      "Content-Type":"application/json",
      "x-auth-token":localStorage.getItem("token")
    }
  
  })
  return res.json();
  
}

//remove From Favourite
export const RemoveFromFavourite = async(id)=>{
  const res = await fetch(`http://localhost:5000/api/user/${id}/remove`,{
    method:"PATCH",
    credentials: 'include', // Ensure cookies are included in the request
    headers:{
      "Content-Type":"application/json",
      "x-auth-token":localStorage.getItem("token")
    }
  
  })
  return res.json();
  
}

export const getFavourite = async()=>{
  console.log(JSON.stringify({email:localStorage.getItem("user")}))
  const res = await fetch('http://localhost:5000/api/user/',{
    method:"GET",
    credentials: 'include', // Ensure cookies are included in the request
    headers:{
      "x-auth-token":localStorage.getItem("token"),
    },
  });
  const data = await  res.json();
  console.log(data);
  return data;
}

export const updateProfilePic = async(url)=>{
  const res = await fetch("http://localhost:5000/api/user/profilePic",{
      method:"POST",
      credentials: 'include', // Ensure cookies are included in the request
      headers:{
        "Content-Type":"application/json",
        "x-auth-token":localStorage.getItem("token")
      },
      body:JSON.stringify({url})
    })
    
    const data =  await res.json();

    console.log({data});

    return data;
  }
