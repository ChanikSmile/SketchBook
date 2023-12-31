import styled from "styled-components";

const Wrapper = styled.div`
  font-family: 'Pretendard-Regular';
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    // width: 2750px;
  
    h1 {
      font-weight: bold;
      font-size: 35px;
      margin-left: 10px;
    }
  }
  
  .connect-button {
    text-align: center; 
    line-height: 40px; 
    color: #8f39ea;
    font-size: 25px;
    text-decoration: none; 
    font-weight: bold;
  }
  
  .connect-button:hover {
    color: purple;
  }
  
  .real_box {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }


  .boxes{
    display: flex;
    align-items: center; 
    justify-content: center; 
    flex-direction: column;
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
  }

  .box-name {
    font-size: 25px;
  }  

  .box .one{
    width: 300px;
    height: 300px;
  }

  .box .two{
    width: 300px;
    height: 300px;
  }

  .box .three{
    width: 300px;
    height: 300px;
  }

  .box .four{
    width: 300px;
    height: 300px;
  }


  h1 {
    font-weight: bold;
    font-size: 35px;
  }

  .box {
    width: 300px;
    height: 400px;
    background-color: #F8F8F8;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
    border-radius: 10px;
  }
  
  .box.active img {
    opacity: 0.1; /* 이미지 투명도 조정 */
  }

  .box.active .box-name {
    color: white;
  }

  .box.active {
    background-color: #333;
    color: white;
  }
  
  .description {
    position: absolute;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }
`;

export default Wrapper;
