import styled from 'styled-components';

export const Styled = styled.form`
  label {
    display: flex;
    flex-direction: column;

    &:first-child {
    margin-bottom: 20px;      
    }
    color: white;

  }
  span {
    margin-bottom: 10px;
    font-weight: 600;
  }
  input {
    padding: 5px;
    border: 1px solid white;
    border-radius: 5px;
    height: 20px;
    &:focus {
      outline: 2px solid rgba(218, 65, 0, 1);
    }
    background-color: rgba(111, 141, 194, 1);
  }
  button {

    margin: 0 auto;
    margin-top: 16px;
    margin-left: 500px;
    padding: 10px;
    border: none;
    background: rgba(255, 77, 0, 1);
    border-radius: 5px;
    color: white;
    &:hover {
      background:rgba(218, 65, 0, 1);
    }
  }
`;

export default Styled;