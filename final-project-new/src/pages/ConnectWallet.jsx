import { useState } from 'react';
import { ethers } from 'ethers';
import TRP_ABI from "../contracts/TRP.json";
import TRP_ADDRESS from "../contracts/TRP_ADDRESS.json";
import './ConnectWallet.css';

export default function ConnectWallet() {
  // Defining an empty state for the wallet address
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");
  const [trpBalance, setTrpBalance] = useState("");

  async function requestAccount() {
    console.log("Account Requested");
  
    // Check if metamask exists in the browser
    if (window.ethereum) {
      console.log("Metamask exists!");
  
      window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        window.ethereum
          .request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          })
          .then((balance) => {
            setWalletBalance(ethers.utils.formatEther(balance[0]));
  
            // Initialize the TRP token contract
            const trpTokenContract = new ethers.Contract(
                Object.values(TRP_ADDRESS)[0],
                Object.values(TRP_ABI)[0],
              new ethers.providers.Web3Provider(window.ethereum).getSigner()
            );
  
            // Get the TRP token balance
            trpTokenContract.balanceOf(accounts[0]).then((trpTokenBalance) => {
              setTrpBalance(ethers.utils.formatUnits(trpTokenBalance, 3));
            });
          });
      });
  
    } else {
      console.log("Metamask not detected!");
    }
  }

  return (
    <div>
        <h1>Connect to Wallet</h1>
        <div className="Wallet">
        <h3 className="Header">Wallet Address:</h3>
        <p className="Content">{walletAddress}</p>
        <h3 className="Header">Address Balance:</h3>
        <p className="Content">{walletBalance} ETH</p>
        <h3 className="Header">TRP Balance:</h3>
        <p className="Content">{trpBalance} TRP</p>
        <button onClick={requestAccount} className="Connect-button">Connect Metamask</button>
        </div>
    </div>
  );
}