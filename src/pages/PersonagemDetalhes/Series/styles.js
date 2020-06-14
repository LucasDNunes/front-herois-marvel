import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div.series {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div.serie {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 200px;
      width: 150px;
      max-height: 200px;
      max-width: 150px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      margin: 10px 5px;
      padding: 5px 10px;
      overflow: hidden;

      &:hover {
        background: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 2px 7px rgba(255, 255, 255, 0.2);
        cursor: pointer;
      }

      &:active {
        transform: translateY(0);
        box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const NoSeries = styled.div`
  display: ${props => (props.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  p {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
`;

export const PageHandler = styled.div`
  display: ${props => (props.hide ? 'flex' : 'none')};
  justify-content: space-around;
  align-items: center;
  width: 250px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 5px 15px;

  button {
    background: #f00;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 4px;

    &:disabled {
      background: rgba(255, 0, 0, 0.2);
    }

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0px);
    }
  }

  span {
    text-align: center;
    vertical-align: baseline;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  }
`;
