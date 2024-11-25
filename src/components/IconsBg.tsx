import React from 'react';
import gasless from '../assets/illustrationsEmpty/gassless.png';
import dappConnection from '../assets/illustrationsEmpty/dapp-connection.png';
import multichain from "../assets/illustrationsEmpty/multichain.png";
import smartWallet from "../assets/illustrationsEmpty/smart-wallets.png";
import stateOfArt from "../assets/illustrationsEmpty/state-of-art.png";
import x from "../assets/iconsbg/walletx-white.png";
import btc from "../assets/iconsbg/btc.svg";
import eth from "../assets/iconsbg/eth.svg";
import discord from "../assets/iconsbg/discord.svg";
import twitter from "../assets/iconsbg/twitter.svg";
import heart from "../assets/iconsbg/heart.svg";
import thumbs from "../assets/iconsbg/thumbsUp.svg";
import share from "../assets/iconsbg/share.svg";

const IconsBg = () => {
  const images = [
    { src: gasless, position: 'top-10 left-10' },
    { src: dappConnection, position: 'top-20 right-20' },
    { src: multichain, position: 'bottom-10 left-1/3' },
    { src: smartWallet, position: 'bottom-20 right-1/4' },
    { src: stateOfArt, position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' },
    { src: x, position: 'top-5 right-5' },
    { src: btc, position: 'bottom-10 left-1/4' },
    { src: eth, position: 'top-1/3 right-1/3' },
    { src: discord, position: 'bottom-20 left-10' },
    { src: twitter, position: 'top-10 left-1/2 transform -translate-x-1/2' },
    { src: heart, position: 'bottom-5 right-10' },
    { src: thumbs, position: 'top-1/4 left-10' },
    { src: share, position: 'bottom-5 left-1/2 transform -translate-x-1/2' }
  ];

  const imgCss = "absolute h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 white-image opacity-20";

  return (
    <div className="h-screen w-screen bg-themeGreen absolute pt-4">
      <div className="h-full w-full relative">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`background icon ${index}`}
            className={`${imgCss} ${img.position}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IconsBg;