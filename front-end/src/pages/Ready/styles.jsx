import styled from 'styled-components';

export const Wrapper = styled.div`
font-family: 'Pretendard-Regular';
text-align: center;
height: 100%;
color : #9D4FE0;

.ready-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

p {
  color: black;
  font-size: 18px;
}

h2 {
    font-weight: bold;
}

.ready-message {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
}

.key-guide {
  text-align: left;
  margin-top: 50px;
}

.icon-ready{
  width : 80px;
  margin : 0 0 5px 20px;
}

.key-icon {
  margin-right: 10px;
  margin-left: 3px;
}

.custom-button-style {
    width: 250px;
    height: 45px;
    color: #000000;
    background-color: #D3B2FF;
    border-color: #D3B2FF;
    margin-bottom: 10px;
  }

  .custom-button-style:hover {
    color: #9D4FE0;
    background-color: #ffffff;
    border: solid 1px #9D4FE0;

  }

`;

export default Wrapper;