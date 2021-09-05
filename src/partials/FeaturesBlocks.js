import React from 'react';
import creators from '../utils/Creators';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js';
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { store } from 'react-notifications-component';
import axios from "axios";

function FeaturesBlocks() {

  async function updateToken(lmp, username) {
    try {
      console.log(username)
      const { data } = await axios.post('http://localhost:3001/creators', { "username": username, "coinvalue": lmp }, null);
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const signAndSendTransaction = async (toPK, lmp, username) => {
    const cluster = "https://api.devnet.solana.com";
    const connection = new Connection(cluster, "confirmed");
    let wallet = new PhantomWalletAdapter();
    try {
      await wallet.connect();
      let transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: toPK,
          lamports: lmp,
        })
      );
      let { blockhash } = await connection.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = wallet.publicKey;
      try {
        let signed = await wallet.signTransaction(transaction);
        let txid = await connection.sendRawTransaction(signed.serialize());
        await connection.confirmTransaction(txid);
        updateToken(lmp, username)
        store.addNotification({
          title: "Success!",
          message: "Transaction was successful!",
          type: "success",
          insert: "top",
          container: "top-center",
          dismiss: {
            duration: 2000,
            onScreen: true
          }
        });
      }
      catch (err) {
        store.addNotification({
          title: "Error!",
          message: "The transaction request was rejected",
          type: "danger",
          insert: "top",
          container: "top-center",
          dismiss: {
            duration: 2000,
            onScreen: true
          }
        });
      }
    }
    catch (err) {
      store.addNotification({
        title: "Error!",
        message: "Phantom Wallet Not Found!",
        type: "danger",
        insert: "top",
        container: "top-center",
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
    }
  }

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-14">
          <h1 className="h2 mb-8 text-white text-center">Popular Creators</h1><br />

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {creators.map(creator =>
              <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white" data-aos="fade-up">
                <div className="relative w-80 h-80 overflow-hidden">
                  <img src={creator.image} alt={creator.name} />
                  <div className="text-center absolute w-full" style={{ bottom: "-30px" }}>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="tracking-wide uppercase text-lg font-bold">{creator.name}</p>
                  <a href={creator.youtube} target="_blank" className="text-gray-400 text-sm">@{creator.youtube.split('/').slice(-1)[0]}</a>
                </div>
                <div className="pb-6 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
                  <div className="posts">
                    <p className="text-lg">1.5 SOL</p>
                    <p className="text-gray-400 text-sm">Coin Price</p>
                  </div>
                  <button className="btn bg-blue-500 text-white" onClick={() => signAndSendTransaction(creator.pk, 500, creator.youtube.split('/').slice(-1)[0])}>Buy</button>
                  <div className="following">
                    <p className="text-lg">{creator.followers}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out">
            <div>
              <a className="btn text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-500 hover:to-green-400 w-full my-8 sm:w-auto sm:mb-0" href="/">Find More Creators</a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
