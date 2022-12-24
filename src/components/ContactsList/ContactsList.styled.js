import styled from 'styled-components';

export const Contacts = styled.ul`
  min-width: 300px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  color: white;
  box-shadow: 0px 0px 1px 1px #ffffff;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
  }
  button {
    margin-left: 10px;
    font-size: 12px;
    width: 70px;
    height: 20px;
    border: none;
    background: rgba(255, 77, 0, 1);
    border-radius: 6px;
    color: white;
    &:hover {
      background: rgba(218, 65, 0, 1);
    }
  }
`;