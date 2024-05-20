import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import styled from "styled-components";
import riff from "../assets/riff.jpg";
import Garden from "../assets/Garden.jpg";
import mezada from "../assets/mezada.jpg";
import cesar from "../assets/cesar.jpg";
import israelmuseum from "../assets/israelmuseum.jpg";
import zoo from "../assets/zoo.jpg";

import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";


//we must add in a dataset used with the AI in here, and fetch it in the frontend so I didn't edit this page

export default function Attractions() {
  const navigate = useNavigate();
  const data = [
    {
      image: riff,
      title: "Dolphin Reef, Eilat",
      subTitle: "Enjoy the rare opportunity to observe and swim with dolphins in their natural habitat",
      cost: "70 TRP",
      duration: "5 hours",
    },
    {
      image: Garden,
      title: "The Botanical Garden",
      subTitle: "Most peaceful place in Jerusalem, for nature lovers",
      cost: "40 TRP",
      duration: "4 hours",
    },
    {
      image: mezada,
      title: "Masada",
      subTitle: "Visit Masada for its dramatic historical significance and stunning desert views",
      cost: "70 TRP",
      duration: "8 hours",
    },
    {
      image: cesar,
      title: "Caesarea National Park",
      subTitle: "Discover Caesarea's impressive Roman ruins and beautiful Mediterranean coastline",
      cost: "39 TRP",
      duration: "6 hours",
    },
    {
      image: israelmuseum,
      title: "Israel Museum, Jerusalem",
      subTitle: "Experience Israel's largest museum with its vast collections of archaeology and art",
      cost: "35 TRP",
      duration: "4 hours",
    },
    {
      image: zoo,
      title: "Jerusalem Biblical Zoo",
      subTitle: "Visit the Biblical Zoo in Jerusalem to see diverse animals in a scenic, biblical-themed setting",
      cost: "50 TRP",
      duration: "6 hours",
    },
  ];



  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <button className="bookbtn" onClick={() => navigate("/paytrip")}>Book Now</button>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                 
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>Approx time at attraction</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: aliceblue;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }

  


.bookbtn {
  appearance: button;
  background-color: mediumSlateBlue;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));
  border: 1px solid #4D4AE8;
  border-radius: 1rem;
  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset,rgba(46, 54, 80, 0.075) 0 1px 1px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Inter,sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  padding: .5rem 1rem;
  text-align: center;
  text-transform: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.bookbtn:focus:not(:focus-visible),
.bookbtn:focus {
  outline: 0;
}

.bookbtn:hover {
  background-color: SlateBlue;
  border-color: #3733E5;
}

.bookbtn:focus {
  background-color: #413FC5;
  border-color: #3E3BBA;
  box-shadow: rgba(255, 255, 255, 0.15) 0 1px 0 inset, rgba(46, 54, 80, 0.075) 0 1px 1px, rgba(104, 101, 235, 0.5) 0 0 0 .2rem;
}

.bookbtn:active {
  background-color: #3E3BBA;
  background-image: none;
  border-color: #3A38AE;
  box-shadow: rgba(46, 54, 80, 0.125) 0 3px 5px inset;
}

.bookbtn:active:focus {
  box-shadow: rgba(46, 54, 80, 0.125) 0 3px 5px inset, rgba(104, 101, 235, 0.5) 0 0 0 .2rem;
}

.bookbtn:disabled {
  background-image: none;
  box-shadow: none;
  opacity: .65;
  pointer-events: none;
}

.title {
  font-size: 25px; 
  font-weight: bold;
  color: #black; 
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px; 
  padding: 15px; 
  
`
;