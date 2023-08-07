import styled from "styled-components";

const Wrapper = styled.div`
  font-family: 'Pretendard-Regular';

  .img-container {
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .img-container2 {
    background-color: #e5e1db;
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .kid-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    object-fit: cover;
    opacity: 0.5;
  }

  .text-overlay,
  .text-overlay2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Pretendard-Regular';
    text-align: center;
  }

  .text-overlay_ballon {
    position: absolute;
    top: 20%;
    left: 10%;
  }

  .text-overlay_ballon2 {
    position: absolute;
    top: 32%;
    right: 10%;
  }

  .text-overlay_ballon3 {
    position: absolute;
    top: 48%;
    left: 10%;
  }

  .text-overlay_ballon4 {
    position: absolute;
    top: 59%;
    right: 10%;
  }


  .text-overlay_h1 {
    font-size: 70px;
    color: black;
    line-height: 1;
    font-weight: bold;
    letter-spacing: -2px;
  }

  .text-overlay_h3,
  .text-overlay_h4 {
    font-size: 30px;
    color: black;
  }

  .message-box,
  .message-box2 {
    width: auto;
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
    margin: 10px;
  }

  .message-box p {
    font-size: 23px;
    margin: 0;
    padding: 5px;
  }


  .message-box2 p {
    font-size: 23px;
    margin: 0;
    padding: 5px;
  }

  .text-overlay2_h1 {
    font-size: 50px;
    color: black;
    line-height: 1;
    font-weight: bold;
    letter-spacing: -2px;
  }

  .boxes-container {
    display: flex;
    justify-content: space-between;
  }

  .box {
    width: 300px;
    height: 200px;
    background-color: #f0f0f0;
    border: none;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .h3 {
    font-size: 100px;
    font-weight: bold;
    color: #ffffff;
    background-color: #000000;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
`;

export default Wrapper;
