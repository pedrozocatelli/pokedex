import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 95vh;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #db1d1d;
  height: 100%;
  width: 30%;
  min-width: 350px;
  border-radius: 5px;
`;

export const RowSearch = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;

  > input {
    width: 100%;
  }
`;

export const Frame = styled.div`
  background: #dbdbdb;
  padding: 25px;
  border-radius: 5px;
  min-height: 40%;
  width: 100%;

  clip-path: polygon(100% 0, 100% 100%, 30px 100%, 0 calc(100% - 30px), 0 0);
`;

export const Screen = styled.div`
  display: flex;
  flex-direction: row;
  background: black;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const ButtonSearch = styled.button`
  background: none;
  border: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  > img {
    max-width: 100px;
    height: auto;
    margin-right: -28px;
  }
`;
