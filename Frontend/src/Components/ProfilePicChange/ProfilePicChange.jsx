import React, { useState } from 'react';
import uploadFile from '../../helper/uploadFile';
import { updateProfilePic } from '../../Services/User';
import {Circles} from "react-loader-spinner"

const ProfilePicChange = ({ url }) => {

    const [loading, setLoading] = useState(false);
  console.log(url);
  // Function to handle image upload
  const handleImageChange = async(event) => {
    setLoading(true);
    try{

        const file = event.target.files[0];
        const upload = await uploadFile(file);
        
    //     // console.log(upload.url);
        await updateProfilePic(upload.url);
    }catch(err){
        console.log(err);
    }
    finally{
        setLoading(false);
    }

    // // console.log(file);
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     setImage(reader.result); // Update the displayed image
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  return (
    <div
      className="relative w-96 h-96 rounded-full overflow-hidden cursor-pointer"
    >
      {/* Profile Picture */}
      <img
        src={url}
        alt="Profile"
        className="w-full h-full object-cover"
      />
        {loading && <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <Circles
                height="80"
                width="80"
                color="#ffff"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />

        </div>}
      {/* Overlay and Icon */}
      {!loading&&<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <label
          htmlFor="file-input"
          className="flex flex-col items-center justify-center text-white cursor-pointer"
        >
            {/* Loading Spinner */}
            {loading && <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-t-4 border-white rounded-full animate-spin"></div>
            </div>}
            
          <span className="material-icons">edit</span>
          <span className="text-sm mt-1">Change Photo</span>
        </label>
      </div>}

      {/* Hidden File Input */}
      <input
        type="file"
        id="file-input"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />

    </div>
  );
};

export default ProfilePicChange;
