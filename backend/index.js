const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const port = process.env.PORT || 5000;

const MetaplexRouter = require('./Routes/Metaplex.route')


app.use('/metaplex', MetaplexRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });


//   app.get('/nfts', async (req, res) => {
//     try {
//       const myNfts = await metaplex.nfts().findAllByOwner({
//         owner: metaplex.identity().ownerPublicKey
//       });
//       res.json(myNfts);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });
  
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });