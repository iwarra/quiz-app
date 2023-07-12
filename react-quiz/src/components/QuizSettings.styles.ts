import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 30px;

  h2 {
    margin: 10px 0 10px 0;
  }

  select {
    margin-left: 10px; 
    padding-left: 8px;
    background: #fff;
    border: 1px solid #7995d2;
    border-radius: 5px;
  }
`;
