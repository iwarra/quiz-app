import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: linear-gradient(180deg, #fff, #B9A986);
  border-radius: 10px;
  border: 3px solid #372916;
  padding: 30px;

  h2 {
    margin: 10px 0 10px 0;
  }

  select {
    margin-left: 10px; 
    padding-left: 8px;
    background: #fff;
    border: 1px solid #948c58;
    border-radius: 5px;
  }
`;