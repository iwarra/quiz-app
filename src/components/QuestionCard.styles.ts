import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 920px;
  background: #fcf7eb;
  border-radius: 10px;
  border: 2px solid #372916;
  padding: 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90vw;
  }

  p {
    font-size: 1.1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    min-height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(180deg, #53d462, #235e2a)'
        : !correct && userClicked
        ? 'linear-gradient(180deg, #FF5656, #8a2f2f)'
        : 'linear-gradient(180deg, #D2C3A0, #79613E)'};
    border: 1px solid #372916;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px black;
  }
`;