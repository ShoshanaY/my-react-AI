import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <FooterContainer>
      <ul className="links">
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/Attractions">Attractions</NavLink>
        </li>
        <li>
        <NavLink to="/Reviews">Reviews</NavLink>
        </li>
        <li>
        <NavLink to="/LeaveReview">Leave a Review</NavLink>
        </li>
        <li>
        <NavLink to="/ConnectWallet">Connect to Wallet</NavLink>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
