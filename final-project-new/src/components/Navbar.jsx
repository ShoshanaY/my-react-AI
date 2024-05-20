import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledNav>
      <StyledMenu onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </StyledMenu>
      <StyledUl open={menuOpen}>
      <StyledLi>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/Attractions">Attractions</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/Reviews">Reviews</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/LeaveReview">Leave a Review</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/ConnectWallet">Connect to Wallet</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledMenu = styled.div`
  display: none; /* Hide the menu on large screens */
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    margin-left: auto; /* Pushes the menu icon to the right */
  }
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%; /* Position the dropdown below the navbar */
    left: 0;
    background-color: #e6e6fa; /* Light purple background */
    width: 100%;
    padding: 1rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")}; /* Slide-in animation */
  }
`;

const StyledLi = styled.li`
  margin-left: 2rem;
  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 1rem; /* Spacing between items in the dropdown */
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333; /* Dark font color */
`;