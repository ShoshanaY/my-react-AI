import React from "react";
import styled from "styled-components";
import Flag_of_Israel from "../assets/Flag_of_Israel.jpg";
import Flag_of_France from "../assets/Flag_of_France.jpg";
import Flag_of_South_Africa from "../assets/Flag_of_South_Africa.svg.png";
export default function Reviews() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          I recently visited Israel and had the most wonderful experience at the Botanical Garden in Jerusalem! The garden is a true oasis of beauty and tranquility. From the moment I entered, I was captivated by the vibrant colors and the incredible variety of plants from all over the world
          </p>
          <div className="info">
            <img src={Flag_of_France} alt="" />
            <div className="details">
              <h4>Pier Monaco</h4>
              <span></span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          As a South African citizen, my visit to the Dolphin Reef in Eilat was an unforgettable highlight of my trip to Israel! From the moment I arrived, I was enchanted by the stunning location and the unique experience that awaited me.
          </p>
          <div className="info">
            <img src={Flag_of_South_Africa} alt="" />
            <div className="details">
              <h4>Thabo</h4>
              <span>  </span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I recently had the pleasure of visiting Caesarea National Park, and it was an incredible experience! This historical gem is an absolute treasure trove of ancient wonders and breathtaking scenery
          </p>
          <div className="info">
            <img src={Flag_of_Israel} alt="" />
            <div className="details">
              <h4>Dudi Amsalem</h4>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 25px
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;