import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
  background: linear-gradient(180deg, #fff, #B9A986);
  border-radius: 10px;
  border: 3px solid #372916;
  padding: 30px 50px;

  @media (max-width: 378px) {
    padding: 25px;
  }

  h2 {
    margin: 5px 0 10px 0;
    font-size: 1.8rem;
  }

  label {
    font-size: 1.1rem;
  }

  select {
    font-size: 1rem;
    padding-left: 8px;
    background: #fff;
    border: 1px solid #948c58;
    border-radius: 5px;
  }

  #category{
    margin-bottom: 5px;
  }
`;
