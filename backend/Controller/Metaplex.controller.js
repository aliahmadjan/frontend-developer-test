const { Metaplex, MetaplexKey } = require("@metaplex-foundation/js");

const { getCandyMachineAddress, getMetadata, Metadata } = require('@metaplex/js');

const { Connection, clusterApiUrl,  PublicKey } = require("@solana/web3.js");
const express = require('express');
const https = require('https');

const connection = new Connection(clusterApiUrl("mainnet-beta"));
const metaplex = new Metaplex(connection);


const ownerPublicKey = new PublicKey('narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X');
const metaplexProgramId = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');


async function fetchOwnerNFTs() {
    const metaplex = new Metaplex(connection);
    const nfts = await metaplex.getProgramAccounts(MetaplexKey.Metadata, {
      filters: [{ memcmp: { offset: 32, bytes: ownerPublicKey.toBase58() } }],
    });
  
    const ownedNFTs = nfts.map((nft) => nft.account);
    console.log(ownedNFTs);
  }
  
  fetchOwnerNFTs().catch(console.error);


  async function getOwnedNFTs(ownerPublicKey) {
    const accounts = await connection.getProgramAccounts(metaplexProgramId, {
      filters: [
        {
          dataSize: Metadata.DATA_SIZE,
        },
      ],
    });
  
    const ownedNFTs = [];
  
    for (const account of accounts) {
      const metadata = await getMetadata(account);
      if (metadata.info.owner.equals(ownerPublicKey)) {
        ownedNFTs.push(metadata);
      }
    }
  
    return ownedNFTs;
  }
  

    exports.getOwnedNFTs = getOwnedNFTs
