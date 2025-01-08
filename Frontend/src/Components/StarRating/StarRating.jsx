import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0); // For clicked rating
  const [hover, setHover] = useState(0); // For hover effect

  return (
    <div className='relative flex gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className='transition-transform duration-200 ease-in-out' // Tailwind classes for transition
        >
          {star <= (hover || rating) ? (
            <FaStar className=' transform hover:scale-125' /> // Tailwind classes for filled star
          ) : (
            <FaRegStar className='transform hover:scale-125' /> // Tailwind classes for outlined star
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRating;
