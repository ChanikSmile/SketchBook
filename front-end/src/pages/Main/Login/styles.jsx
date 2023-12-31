import styled from "styled-components";

const Wrapper = styled.div`

.login {
  background-color: rgba(255, 255, 255, 0.5); 
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  right: 30%; 
  transform: translate(50%, -50%);
  font-family: 'Pretendard-Regular';
  color: gray;
}

.start {
  border: none;
  background-color: #FFEE59;
  width: 350px;
  height: 45px;
  display: block;
}
/* 시작하기 버튼 */

.mb-3{
  height: 45px;
}
.activated{
  color: black;
  font-weight: bold;
  text-decoration: underline;
}
/* 선택시 활성화표시하려고 */


.login-signup-buttons {
  display: flex;
  justify-content: space-around; 
  width: 100%; 
  margin-bottom: 20px; 
}

.forgot-password {
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content:space-between;
}

.to-about-us {
  margin-top: 20px;
  font-size: 14px;
  text-align: start;
}

.forgot-password a {
  color: black;
}

.warningmsg{
  color: black;
  margin-top: 0px;
  text-align: left;
  margin-bottom: 5px;
  font-size: 14px;
}

@media screen and (max-width: 1020px) {
  .login {
    right: 50%;
  }
}

form{
  display: flex;
  flex-direction: column;
}

span{
  margin-left: 5px;
}


`

export default Wrapper;