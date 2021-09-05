import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Connection, SystemProgram, Transaction } from '@solana/web3.js';
import '../css/dropdown.css'
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { store } from 'react-notifications-component';

function Header() {

  const [walletConnected, setWalletConnected] = React.useState(false)
  const [userPK, setUserPK] = React.useState(false)
  const [balance, setBalance] = React.useState(false)

  const cluster = "https://api.devnet.solana.com";
  const connection = new Connection(cluster, "confirmed");
  let wallet = new PhantomWalletAdapter();

  const initWallet = async () => {
    try {
      wallet.on("connect", () => {
        setWalletConnected(true)
        getBalance(wallet._publicKey).then(result => setBalance(result))
        setUserPK(wallet._publicKey.toString())
        store.addNotification({
          title: "Success!",
          message: "Successfully Connected to Wallet!",
          type: "success",
          insert: "top",
          container: "top-center",
          dismiss: {
            duration: 2000,
            onScreen: true
          }
        });
      })
      await wallet.connect();
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

  const signOutHandler = () => {
    setWalletConnected(false)
    store.addNotification({
      title: "Success!",
      message: "Signed Out!",
      type: "success",
      insert: "top",
      container: "top-center",
      dismiss: {
        duration: 2000,
        onScreen: true
      }
    });
  }

  const getBalance = async (publicKey) => {
    return await connection.getBalance(publicKey, "confirmed");
  };

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4 mt-6">
            {/* Logo */}
            <Link to="/" className="block">
              <h1 className="text-3xl md:text-3xl bg-clip-text text-transparent font-extrabold leading-tighter tracking-tighter bg-gradient-to-r from-blue-500 to-teal-400">CREATOIN</h1><br />
            </Link>
          </div>

          <nav className="flex flex-grow justify-end">
            {!walletConnected ?
              <button onClick={initWallet} className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">Connect Phantom Wallet</button>
              :
              <div class=" relative inline-block text-left dropdown">
                <span class="rounded-md shadow-sm"
                > <button className="btn-sm ml-3 text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-500 hover:to-green-400">Wallet Connected
                    <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button
                  ></span>
                <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div class="absolute right-0 w-60 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                    <div class="px-4 py-3">
                      <p class="text-sm leading-5 font-semibold">Your Public Key</p>
                      <p class="text-sm font-medium leading-5 text-gray-900 break-words">{userPK ? userPK : ''}</p>
                    </div>
                    <div class="px-4 py-3">
                      <p class="text-sm leading-5 font-semibold">Balance</p>
                      <p class="text-sm font-medium leading-5 text-gray-900 break-words">{balance ? (balance / 1000000000).toFixed() : ''} SOL</p>
                    </div>
                    <div class="py-1">
                      <p onClick={signOutHandler} class="text-black font-semibold flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer" >Sign out</p>
                    </div>
                  </div>
                </div>
              </div>
            }</nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
