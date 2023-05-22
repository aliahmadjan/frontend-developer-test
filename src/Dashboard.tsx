import React, { useEffect } from 'react';
import { MouseEvent } from 'react';
import { useState } from 'react';
import { bundlrStorage, keypairIdentity, Metaplex, PublicKey, } from '@metaplex-foundation/js';
import { Connection, clusterApiUrl, Keypair } from '@solana/web3.js';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';



const Dashboard: React.FC = () => {
  
  
  
  const [cardPositions, setCardPositions] = useState([0, 1, 2]);
  const [isTop, setIsTop] = useState(true);
  const [myNfts, setMyNfts] = useState<any>([]);
  const [nft, setNft] = useState();
  const [address, setAddress] = useState(
    'narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X',
  );

  const [cardStyles, setCardStyles] = useState([
    {
      left: '105px',
      top: '220px',
      width: '388px',
      height: '600px',
      transition: 'all 0.5s ease-in-out',
      transform: 'rotate(0deg)',
    },
    {
      left: '585px',
      top: '220px',
      width: '388px',
      height: '600px',
      transition: 'all 0.5s ease-in-out',
      transform: 'rotate(0deg)',
    },
    {
      left: '1055px',
      top: '220px',
      width: '388px',
      height: '600px',
      transition: 'all 0.5s ease-in-out',
      transform: 'rotate(0deg)',
    },
  ]);
 
  

   
//  const wallet = Keypair.generate();
// // //console.log(wallet)
 

//      const metaplex = Metaplex.make(connection)
//     .use(keypairIdentity(wallet))
//     .use(bundlrStorage({
//       providerUrl: 'https://api.mainnet-beta.solana.com',
//       timeout: 60000,
// }));

  //  console.log("Public Key of keypair being used:", wallet.publicKey.toBase58())


const fetchNfts =  async () => {
//   const connection = new Connection(clusterApiUrl("mainnet-beta"));
//   //const metaplex = Metaplex.make(connection)
//   const wallet = Keypair.generate();
//    const metaplex = Metaplex.make(connection)
//    .use(keypairIdentity(wallet))
// .use(bundlrStorage({
//       providerUrl: 'https://api.mainnet-beta.solana.com',
//       timeout: 60000,
// }));

//   console.log("Public Key of keypair being used:", wallet.publicKey.toBase58())
  //const owner = new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X")
  //const nft = metaplex.nfts().findByMint({owner})
  // console.log(metaplex)
  // const owner = new PublicKey(wallet.publicKey.toBase58())
  //
  // const nfts = metaplex.nfts().findAllByOwner({
  //   owner: owner
  // });

  const wallet = Keypair.generate();
  const connection = new Connection(clusterApiUrl('mainnet-beta'));
  const metaplex = new Metaplex(connection)
//   const metaplex = Metaplex.make(connection)
//   .use(keypairIdentity(wallet))
// .use(bundlrStorage());

  console.log(metaplex)
  const owner = new PublicKey("narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X")
  const nft = await metaplex.nfts().findAllByOwner({ owner: owner });
  //console.log(asset);
  setMyNfts(nft);
  
  
  // console.log(nfts)
  // setMyNfts(nfts);
};

/*
I conducted an in-depth study of the Metaplex SDK and familiarized myself with its implementation by thoroughly reading
 its documentation. To begin implementing the SDK, I installed the required packages as
  instructed and executed the commands to establish a connection to the Solana blockchain.
  Although the connection was successfully established, I encountered an error when providing the mint address and to find the all NFTS 
  of a specific owner by using the Public Key provided.
   However I was continously getting 403 Error: Access forbidden error.
I attempted to debug the issue but was unable to resolve it, so I decided to reach out to the SDK's admin for assistance.
*/


  useEffect(() => {
    console.log(myNfts)
    fetchNfts();
  }, []);
  
  
  function handleLeftButtonClick() {
    setCardPositions((prevPositions) => [
      prevPositions[1],
      prevPositions[2],
      prevPositions[0],
    ]);
  
    setCardStyles((prevStyles) => [
      {
        ...prevStyles[1],
        transform: 'rotate(0deg)',
      },
      {
        ...prevStyles[2],
        transform: 'rotate(0deg)',
      },
      {
        ...prevStyles[0],
        transform: 'rotate(0deg)',
      },
    ]);
  }
  
  function handleRightButtonClick() {
    console.log('Right button clicked');
    setCardPositions((prevPositions) => [
      prevPositions[1],
      prevPositions[2],
      prevPositions[0],
    ]);

    setCardStyles((prevStyles) => [
      {
        ...prevStyles[1],
        transform: 'rotate(0deg)',
      },
      {
        ...prevStyles[2],
        transform: 'rotate(0deg)',
      },
      {
        ...prevStyles[0],
        transform: 'rotate(0deg)',
      },
    ]);
  
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 


  


  return (
    <div className="flex flex-col w-full h-screen bg-black full-rounded" style={{height:'1000px'}}>
    <div className="flex flex-col w-full h-screen full-rounded" style={{height:'1000px' , borderRadius:'30px' ,backgroundColor: '#131417'}}>
      {/* <div className="p-4" > */}

  {/* ETH/USTD */}
      <div className='bg-black rounded p-4 absolute' style={{width:'254px' , height:'40px',top:'20px',left:'105px',borderRadius:'14px'}}>
      
        <img 
        src ='../icon.png'
        alt="Icon"
        className='h-8 w-auto absolute'
        style={{
            top:'7px',
            left: '8px',
            width:'25px',
            height:'25px',
             
         }} 
         />
         <p style={{ 
            fontFamily: 'SF Pro Text',
            fontSize: '14px',
            lineHeight: '20px',
            left: '41px',
            top: '9px',
            color: '#FFFFFF',
            position: 'absolute'

         }}> ETH/USDT </p>
         
          <p style={{ 
            fontFamily: 'SF Pro Text',
            fontSize: '14px',
            lineHeight: '20px',
            left: '140px',
            top: '9px',
            color: 'green',
            position: 'absolute'

         }}> 1137.62 +2.62%  </p>
          <img 
          src='../top.png'
          alt= 'Top'
          className = 'h-8 w-auto absolute'
          style={{
              // borderRadius: '50%',
              left: '236px',
              top: '13px',
              width: '12px',
              height: '12px',
              
              backgroundColor: 'green',
              
              
          }}
          /> 

        
    </div>

   {/* AVATAR ALONG WITH USER NAME */}
      <div className='bg-black rounded p-4 absolute' style={{width:'210px' , height:'40px',top:'20px',left:'1230px',borderRadius:'14px'}}>
        <img
            src='../avatar image.png'
            alt= 'Avatar'
            className = 'h-8 w-auto absolute'
            style={{
                borderRadius: '50%',
                left: '10px',
                top: '7px',
                width: '25px',
                height: '25px'
            }}
        />
        <p style={{ 
            fontFamily: 'SF Pro',
            fontSize: '14px',
            lineHeight: '20px',
            left: '45px',
            top: '9px',
            color: '#FFFFFF',
            position: 'absolute'

         }}> zash | User ID: 11026666</p>
    </div>

{/* REFRESH ICON */}
         <h1 className="text-2xl font-bold absolute" style={{top:'125px' , 
         left: '115px',
         fontFamily: 'SF Pro',
            fontSize: '24px',
            lineHeight: '20px',
          
            color: '#FFFFFF',
            position: 'absolute'}}>Dashboard</h1>
         <div className="bg-black rounded-lg p-4 absolute" style={{left: '1400px', top: '105px', width: '40px', height: '40px'}}>
        
        
         <img 
         src="../refresh icon.png"
         alt="Refresh"
         className='h-8 w-auto absolute'
         style={{
          top: '10px',
          left: '8px',
          width: '25px',
          height: '25px',
          
          filter: 'invert(1)',
        }}
         />
          {/* </div> */}
      </div>




      {/* Card Container */}

      {/* <div className="card-container"> */}
     {cardPositions.map((position,index) => {
    if (position === 0) {
      return (
        <div
          key={position}
          className="bg-black rounded-xl p-4 absolute"
          style={{ ...cardStyles[position],order: index }}
        
        >
          {/* Card content */}
 
          <h3 className="text-2xl font-bold text-white absolute" style={{ top: '10px',
         fontFamily: 'SF pro Text',
         fontStyle : 'Regular',
         fontSize :'18px',
         textAlign: 'left',}}> zombies #7919 </h3>
            <img
                 src="../more options.png"
                alt="Options"
                className="h-8 w-auto absolute "
                style={{ width: '20px', height: '20px' , filter: 'invert(1)', top: '18px',left: '22rem'}}
              />  
              <img
                src="../nft_illustration (1).png"
               alt="Illustration 1"
                 className="h-8 w-auto absolute"
                style ={{width:'367px', height:'370px' , top: '49px' , left: '10px'}}
              />
               <div className="rounded-xl p-4 absolute" style={{width: '364px', height: '160px', top: '428px' ,left: '12px', backgroundColor: '#18191D'}}>
                 <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'8px' , left:'8px'}}>
                   <p style={{ width: '45px', 
                     height: '20px', top: '8px ' ,left: '10px', 
                    fontFamily: 'SF Pro Text',
                     fontStyle : 'Regular',
                     fontSize :'14px',
                     textAlign: 'left',
                     position :'absolute',
                   color:'white'
                
                }} >Owner</p>
                <p style={{ width: '96px', 
                    height: '20px', top: '8px ' ,left: '258px', 
                     fontFamily: 'SF Pro Text',
                     fontStyle : 'Regular',
                     fontSize :'14px',
                     textAlign: 'left',
                     position :'absolute',
                     color:'white'
                
               }} > | 72UGr...YdD</p>
                 </div>
              <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'56px' , left:'8px'}}>
              <h3 style={{ width: '85px', 
                   height: '10px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white',
                 
              
              }} >Mint Address</h3>
               <p style={{ width: '96px', 
                   height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                    fontStyle : 'Regular',
                    fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                  color:'white'
              
              }} >| 72UGr...YdD</p>
                </div>
                <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'104px' , left:'8px'}}>
                <p style={{ width: '85px', 
                   height: '10px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white'
              
              }} >Token Address</p>
               <p style={{ width: '96px', 
                   height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                    fontStyle : 'Regular',
                    fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                  color:'white'
              
              }} >| 72UGr...YdD</p> 
                 </div>
               </div>
        </div>
      );
    }
    else if (position === 1) 
    {
    return (
      <div
        key={position}
        className="bg-black rounded-xl p-4 absolute"
        style={{ ...cardStyles[position], order: index  }}
      >
        {/* Card content */}
        <h3 className="text-2xl font-bold text-white absolute " style={{ top: '10px',
       fontFamily: 'SF pro Text',
       fontStyle : 'Regular',
       fontSize :'18px',
       textAlign: 'left',}}> Cyberlink #2551 </h3>
          <img
               src="../more options.png"
              alt="Options"
              className="h-8 w-auto absolute "
              style={{ width: '20px', height: '20px' , filter: 'invert(1)', top: '18px',left: '22rem'}}
            />  
            <img
              src="../nft_illustration.png"
             alt="Illustration 1"
               className="h-8 w-auto absolute"
              style ={{width:'367px', height:'370px' , top: '49px' , left: '10px'}}
            />
             <div className="rounded-xl p-4 absolute" style={{width: '364px', height: '160px', top: '428px' ,left: '12px', backgroundColor: '#18191D'}}>
               <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'8px' , left:'8px'}}>
                 <p style={{ width: '45px', 
                   height: '20px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white'
              
              }} >Owner</p>
              <p style={{ width: '96px', 
                  height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                  fontStyle : 'Regular',
                  fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                   color:'white'
              
             }} >| 72UGr...YdD</p>
               </div>
            <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'56px' , left:'8px'}}>
            <p style={{ width: '85px', 
                   height: '10px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white'
              
              }} >Mint Address</p>
              <p style={{ width: '96px', 
                  height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                  fontStyle : 'Regular',
                  fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                   color:'white'
              
             }} >| 72UGr...YdD</p>
              </div>
              <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'104px' , left:'8px'}}>
              <p style={{ width: '85px', 
                   height: '20px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white'
              
              }} >Token Address</p>
              <p style={{ width: '96px', 
                  height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                  fontStyle : 'Regular',
                  fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                   color:'white'
              
             }} >| 72UGr...YdD</p>
               </div>
             </div>
      </div>
    );
  }
  else if (position === 2) {
    return (
      <div
        key={position}
        className="bg-black rounded-xl p-4 absolute"
        style={{ ...cardStyles[position], order: index  }}
      >
        {/* Card content */}
        <h3 className="text-2xl font-bold text-white absolute" style={{ top: '10px',
        fontFamily: 'SF pro Text',
        fontStyle : 'Regular',
        fontSize :'18px',
        textAlign: 'left',
      
      }}>The Eyedeas #1029</h3>
          <img
               src="../more options.png"
              alt="Options"
              className="h-8 w-auto absolute "
              style={{ width: '20px', height: '20px' , filter: 'invert(1)', top: '18px',left: '22rem'}}
            />  
            <img
              src="../nft_illustration3.png"
             alt="Illustration 1"
               className="h-8 w-auto absolute"
              style ={{width:'367px', height:'370px' , top: '49px' , left: '10px'}}
            />
              <div className="rounded-xl p-4 absolute" style={{width: '364px', height: '160px', top: '428px' ,left: '12px', backgroundColor: '#18191D'}}>
              <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'8px' , left:'8px'}}>
                  <p style={{ width: '45px', 
                  height: '20px', top: '8px ' ,left: '10px', 
                   fontFamily: 'SF Pro Text',
                    fontStyle : 'Regular',
                    fontSize :'14px',
                   textAlign: 'left',
                    position :'absolute',
                 color:'white'
              
               }} >
            Owner</p>
               <p style={{ width: '96px', 
                   height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                    fontStyle : 'Regular',
                    fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                  color:'white'
              
              }} >| 72UGr...YdD</p>
                </div>
             <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'56px' , left:'8px'}}>
             <p style={{ width: '85px', 
                   height: '10px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white'
              
              }} >Mint Address</p>
               <p style={{ width: '96px', 
                   height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                    fontStyle : 'Regular',
                    fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                  color:'white'
              
              }} >| 72UGr...YdD</p>
              </div>
               <div className="bg-black rounded-lg p-4 absolute" style={{width: '348px' ,height: '36px' ,top:'104px' , left:'8px'}}>
               <p style={{ width: '85px', 
                   height: '10px', top: '8px ' ,left: '10px', 
                  fontFamily: 'SF Pro Text',
                   fontStyle : 'Regular',
                   fontSize :'14px',
                   textAlign: 'left',
                   position :'absolute',
                 color:'white'
              
              }} >Token Address</p>
               <p style={{ width: '96px', 
                   height: '20px', top: '8px ' ,left: '258px', 
                  fontFamily: 'SF Pro Text',
                    fontStyle : 'Regular',
                    fontSize :'14px',
                  textAlign: 'left',
                   position :'absolute',
                  color:'white'
              
              }} >| 72UGr...YdD</p>
                </div>

             </div>
             </div>
    );
  }
})}






    <div className='bg-black rounded p-4 absolute' style={{ width: '295px', height: '78px', top: '862px', left: '628px', borderRadius: '39px' }}>
  <div style={{ width: '50px', height: '50px', top: '15px', left: '8px', borderRadius: '50%', backgroundColor: '#18191D',  position: 'absolute' }}>
  <img 
    src='../left-arrow.png'
    alt="Left Arrow"
    style ={{width: '25px', height: '35px', top: '10px', left: '10px', borderRadius: '50%', filter: 'invert(1)', position: 'absolute' }}
    onClick={handleLeftButtonClick}
    />
  
  </div> 

  <div style={{ width: '50px', height: '50px', top: '15px', right: '8px', borderRadius: '50%', backgroundColor: '#18191D', position: 'absolute' }}>
    <img 
    src='../right-arrow.png'
    alt="Right Arrow"
    style ={{width: '25px', height: '35px', top: '10px', right: '10px', borderRadius: '50%', filter: 'invert(1)', position: 'absolute' }}
    onClick={handleRightButtonClick}
    />
   
  </div> 
</div>


{isTop && (
        <div className='bg-black rounded p-2 fixed' style={{ width: '60px', height: '40px', top: '700px', right: '680px', borderRadius: '20px' }}>
          <div style={{ width: '20px', height: '20px', top: '10px', left: '8px', borderRadius: '50%', backgroundColor: '#18191D', position: 'absolute' }}>
            <img
              src='../left-arrow.png'
              alt="Left Arrow"
              style={{ width: '10px', height: '14px', top: '5px', left: '5px', borderRadius: '50%', filter: 'invert(1)', position: 'absolute' }}
              onClick={handleLeftButtonClick}
            />
          </div>

          <div style={{ width: '20px', height: '20px', top: '10px', right: '8px', borderRadius: '50%', backgroundColor: '#18191D', position: 'absolute' }}>
            <img
              src='../right-arrow.png'
              alt="Right Arrow"
              style={{ width: '10px', height: '14px', top: '5px', right: '5px', borderRadius: '50%', filter: 'invert(1)', position: 'absolute' }}
              onClick={handleRightButtonClick}
            />
          </div>
        </div>
      )}
  
</div>

    
</div>


)};
 
export default Dashboard;
