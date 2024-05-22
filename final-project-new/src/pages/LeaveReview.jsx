import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "../components/ErrorMessage";
import TxList from "../components/TxList";
import TRP_ABI from "../contracts/TRP.json";
import TRP_ADDRESS from "../contracts/TRP_ADDRESS.json";
import CONSTANT_WALLET_ADDRESS from "../contracts/CONSTANT_WALLET_ADDRESS.json";
import styled from "styled-components";

const startPayment = async ({ setError, setTxs, token, amount, constantWalletAddress }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let tokenContract;
    if (token === "TRP") {
      tokenContract = new ethers.Contract(Object.values(TRP_ADDRESS)[0], Object.values(TRP_ABI)[0], signer);
      console.log(tokenContract);
    } else {
      throw new Error(`Unsupported token: ${token}`);
    }
    const decimals = await tokenContract.decimals();
    console.log(decimals);
    const amountInWei = ethers.utils.parseUnits(amount.toString(), decimals);
    console.log(amountInWei);
    const constantWalletContract = new ethers.Contract(constantWalletAddress, Object.values(TRP_ABI)[0], signer);
    const constantWalletSigner = constantWalletContract.connect(signer);
    const addr = await signer.getAddress();
    const tx = await constantWalletSigner.transfer(addr, amountInWei);
    console.log(tx);
    console.log({ token, amount, addr, constantWalletAddress });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function PayTrip() {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attraction, setAttraction] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    const token = "TRP";
    const amount = 5;
    const constantWalletAddress = Object.values(CONSTANT_WALLET_ADDRESS)[0];
    await startPayment({
        setError,
        setTxs,
        token,
        amount,
        constantWalletAddress
    });
    // Submit review to the blockchain
    // ...
  };
  return (
    <Section2 >
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="title">
            Leave a Review
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Name"
              />
            </div>
            <div className="my-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                value={attraction}
                onChange={(e) => setAttraction(e.target.value)}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Attraction"
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Location"
              />
            </div>
            <div className="my-3">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Description"
              />
            </div>
            <div className="my-3">
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Rating (1-5)"
              />
            </div>
            <div className="my-3">
              <input
                name="amount"
                type="hidden"
                value={1}
                className="input input-bordered block w-full focus:ring focus:outline-none"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          >
            Submit Review and Receive TRP
          </button>
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form></Section2>
  );
}

const Section2 = styled.section`


  .my-3 {
    text-align: center;
    max-width: 300px;
    margin: 10px auto;
    padding: 5px ;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 38px;
    font-weight: bold;
    color: #black; 
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    
  }

  .m-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input, textarea, select, button {
    margin-bottom: 15px;
    padding: 10px;
    border: 2px solid #5A67D8; /* Light purple border */
    border-radius: 5px;
    font-size: 16px;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: #7F9CF5; /* Slightly darker purple for focus */
    box-shadow: 0 0 5px rgba(123, 97, 255, 0.5);
  }

  button {
    position:center;
    background-color: #5A67D8; /* Light purple background */
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #434190; /* Darker purple on hover */
  }

  button:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(123, 97, 255, 0.5);
  }

  .error-message, .tx-list {
    margin-top: 10px;
  }

  `;

  .error-message, .tx-list {
    margin-top: 10px;
  }

  `;
