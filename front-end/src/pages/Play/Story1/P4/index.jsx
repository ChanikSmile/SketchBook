import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../../play-background/엄마는 카멜레온_4.gif";
import audio4 from "../../../../play-background/ske_4.mp3";

function P4() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/play/story1/p5");
    }, 16000);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 취소
  }, [navigate]); // 빈 의존성 배열을 사용하여 마운트 시에만 타이머 설정

  return (
    <div>
      <img className="back-ground" src={image1} alt="" />

      <audio autoPlay>
        <source src={audio4} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default P4;
