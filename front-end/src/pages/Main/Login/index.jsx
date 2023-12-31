import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "./styles";
import PasswordModal from "../../../components/PasswordModal";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [passwordwarning, setPasswordWarning] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx =
    /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*()\-_=+{}[\]|\\;:'",.<>/?]).{8,20}$/;

  const emailCheck = (username) => {
    const isValidEmail = emailRegEx.test(username);
    if (!isValidEmail && username !== "") {
      setWarning("이메일 형식을 확인해주세요.");
    } else {
      setWarning("");
    }
    return isValidEmail;
  };

  const passwordCheck = (password) => {
    const isValidPassword = passwordRegEx.test(password);

    if (!isValidPassword && password !== "") {
      setPasswordWarning(
        "대/소문자, 숫자, 특수문자를 포함한 8~20자로 입력해 주세요."
      );
    } else {
      setPasswordWarning("");
    }

    return isValidPassword;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", {
        email: useremail,
        password: password,
      })
      .then((res) => {
        if (res.data.loginSuccess === false) {
          alert("일치하는 회원정보가 없습니다.");
          return;
        } else {
          navigate("/main"); // 기기 연결 페이지로 이동하게 변경
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <PasswordModal closeModal={closeModal} isModalOpen={isModalOpen} />
      <div className="login">
        <div className="login-signup-buttons">
          <Link to="#" style={{ textDecoration: "none", color: "gray" }}>
            <h3 className="activated">로그인</h3>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "gray" }}>
            <h3>회원가입</h3>
          </Link>
        </div>

        <form>
          <div style={{ height: "70px" }}>
            <InputGroup style={{ height: "45px" }}>
              <Form.Control
                placeholder="이메일"
                aria-label="useremail"
                style={{ backgroundColor: "#E6E6E6" }}
                autoComplete="off"
                onChange={(e) => {
                  setUseremail(e.target.value);
                  emailCheck(e.target.value);
                }}
              />
            </InputGroup>
            <span className="warningmsg">{warning}</span>
          </div>

          <div style={{ height: "70px" }}>
            <InputGroup style={{ height: "45px" }}>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호"
                aria-label="password"
                autoComplete="off"
                style={{ backgroundColor: "#E6E6E6" }}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  passwordCheck(e.target.value);
                }}
              />
              <InputGroup.Text
                onClick={handleShowPassword}
                style={{ cursor: "pointer" }}
              >
                <i
                  className={
                    showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                  }
                ></i>
              </InputGroup.Text>
            </InputGroup>
            <span className="warningmsg">{passwordwarning}</span>
          </div>

          <button type="submit" className="start" onClick={login}>
            시작하기
          </button>
          <div className="tags">
            <p
              className="forgot-password"
              style={{ textDecoration: "underline" }}
            >
              <a href="/aboutUs">어떤 서비스인가요?</a>{" "}
              <a onClick={openModal}>비밀번호 찾기</a>
            </p>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
