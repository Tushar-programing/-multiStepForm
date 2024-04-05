import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img2 from "../image/SLIDER.png"


function Sixth() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 3 seconds
    const timeoutId = setTimeout(() => {
      navigate('/answer'); // Replace '/' with your desired destination path
    }, 2000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [navigate]); // Include navigate in the dependency array to avoid eslint warning

  return (
    <div>
      <div className='w-full h-80'>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
      <div className='text-2xl font-bold mt-5'>Finding learning path recommendations for you based on <br /> your response</div>
    </div>
  );
}

export default Sixth;
