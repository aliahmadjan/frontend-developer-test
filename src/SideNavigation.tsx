import React from 'react';
import { useState } from 'react';

const SideNavigation: React.FC = () => {
    const [isClickedHome, setIsClickedHome] = useState(false);
    const [isClickedSetting, setIsClickedSettings] = useState(false);
    const [isClickedListing,setIsClickedListing] = useState(false);


  const handleClickHome = () => {
    setIsClickedHome(true);
  };

  const handleClickedSettings = () => {
    setIsClickedSettings(true);
  }

  const handleClickedLisitng = () => {
    setIsClickedListing(true);
  }

  return (
    <div className="flex flex-col w-20 screen bg-black text-white" style={{height:'1000px'}}>
      <div className="flex items-center pl-4 py-4">
      <img
  src="../brand logo.png"
  alt="Logo"
  className="h-8 w-auto absolute "
  style={{ width: '25px', height: '25px' , filter: 'invert(1)',top:'1.7rem',left: '1.8rem'}}
/>

</div>

<div>
<img
        src={isClickedHome ? "../home1.png": "../home.png"}
        alt="Logo"
        className="h-8 w-auto absolute"
        style={{
         ...(isClickedHome ? 
            {
                width: '90px',
                height: '90px',          
                top: '18rem',
                 left: '-0.2rem',
                 boxShadow: 'none', // Remove box-shadow when clicked
                 transition: 'all 0.5s ease-in-out',
            } :
            {
            width: '20px',
            height: '20px',
            top: '20rem',
            left: '1.5rem',
            filter:'invert(0.5)',
            boxShadow: 'none', // Remove box-shadow when clicked
            
             } )
          
         
          
        }}
      
        
        onClick={handleClickHome}
      />
  

  </div>
<div>
<img
 src={isClickedListing ? "../listing1.png": "../nft listing.png"}
 alt="Logo"
 className="h-8 w-auto absolute"
 style={{
  ...(isClickedListing ? 
     {
         width: '90px',
         height: '90px',          
         top: '22rem',
          left: '-0.2rem',
          boxShadow: 'none', // Remove box-shadow when clicked
          transition: 'all 0.5s ease-in-out',
     } :
     {
     width: '20px',
     height: '20px',
     top: '24rem',
     left: '1.5rem',
     filter:'invert(0.5)',
     boxShadow: 'none', // Remove box-shadow when clicked
     
      } )
   
  
   
 }}
  onClick={handleClickedLisitng}
/>
</div>
<div>


<img
  src={isClickedSetting ? "../settings1.png": "../settings.png"}
  alt="Logo"
  className="h-8 w-auto absolute"
  style={{
   ...(isClickedSetting ? 
      {
          width: '90px',
          height: '90px',          
          top: '26rem',
           left: '-0.18rem',
           boxShadow: 'none', // Remove box-shadow when clicked
           transition: 'all 0.5s ease-in-out',
      } :
      {
      width: '20px',
      height: '20px',
      top: '28rem',
      left: '1.5rem',
      filter:'invert(0.5)',
      boxShadow: 'none', // Remove box-shadow when clicked
      
       } )
    
   
    
  }}
  onClick={handleClickedSettings}
/>
      </div>

      
      <div style={{ position: 'relative' }}>
  <img
    src="../notifications.png"
    alt="Logo"
    className="h-8 w-auto absolute"
    style={{
      width: '20px',
      height: '20px',
      top: '56rem',
      left: '1.6rem',
      filter: 'invert(0.5)',
      
    }}
  />
  <div
    style={{
      position: 'absolute',
      top: '900px',
      left: '54%',
      transform: 'translate(-50%, -50%)',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: 'white',
    }}
  ></div>
</div>

      
      
      </div>
  );
};

export default SideNavigation;
