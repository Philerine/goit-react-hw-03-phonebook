import styled from 'styled-components';


export const FilterStyle = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: white;
  span {
    margin-bottom: 10px;
    font-weight: 600;
  }
  input {
    padding: 5px;
    border: 1px solid white;
    background-color: rgba(111, 141, 194, 1);
    border-radius: 5px;
    height: 20px;
    &:focus {
      outline: 2px solid rgba(218, 65, 0, 1);
    }
  }
`;