import styled from "styled-components";

export const Container = styled.div`
  @keyframes colorChange {
    0%,
    55% {
      filter: brightness(0) invert(1);
    }
    11%,
    33% {
      filter: none;
    }
  }
  @keyframes colorChangeButton {
    0%,
    88% {
      filter: brightness(0) invert(1);
    }
    22%,
    44% {
      filter: none;
    }
  }

  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* height: 100vh; */
  min-width: 24rem;

  main {
    min-width: 24rem;
    max-width: 104.8rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;

      font-size: 12.8rem;
      line-height: 12.8rem;
      letter-spacing: -1.24rem;
      color: ${props => props.theme.colors.white};

      @media (max-width: ${props => props.theme.breakpoints.mobile.firstWidth}) {
        font-size: 8.8rem;
        line-height: 8.8rem;
        letter-spacing: -0.8rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile.secondWidth}) {
        font-size: 5.6rem;
        line-height: 5.6rem;
        letter-spacing: -0.6rem;
      }

      span {
        padding: 0.96rem;
        filter: brightness(0) invert(1);

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: colorChange 10s ease-in-out infinite;
      }

      span:nth-child(1) {
        background-image: linear-gradient(90deg, #7928ca, #ff0080);
      }
      span:nth-child(2) {
        background-image: linear-gradient(90deg, #FF0078, #F6EFA7);
        animation-delay: 3.33s;
      }
      span:nth-child(3) {
        background-image: linear-gradient(90deg, #C973FF, #00dfd8);
        animation-delay: 6.66s;
      }
    }

    .buttons {
      filter: brightness(1) invert(0);
      background: transparent;
      margin-top: 6.4rem;

      display: flex;
      align-items: center;

      animation: colorChangeButton 10s ease-in-out infinite;

      > button {
        background-image: linear-gradient(90deg, #7928ca, #ff0080, #ff4d4d, #f9cb28);
        color: ${props => props.theme.colors.white};
        border-radius: 0.6rem;

        margin-right: 1.2rem;
        padding: 1.5rem;
        border: 0.1rem solid ${props => props.theme.colors.white};

        font-size: 1.6rem;
        font-weight: 600;

        cursor: pointer;
        transition: 0.2s ease-in-out;

        &:hover {
          background: transparent;
          color: ${props => props.theme.colors.white};
          border: 0.1rem solid ${props => props.theme.colors.white};
        }
      }
    }

    h2 {
      flex-wrap: wrap;
      margin: 6.4rem 1.2rem;
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: -0.04rem;
      text-align: center;
    }
  }

  footer {
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.32rem;

    text-align: center;
    margin-top: 6.8rem;
    margin-bottom: 2.8rem;
 }
`
