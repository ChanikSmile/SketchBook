import image from "../../../../play-background/엄마는 카멜레온_13.gif";
import audio13 from "../../../../play-background/ske_13.mp3";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function P13() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/play/story1/p14");
    }, 8000);

    return () => { clearTimeout(timer) };
  }, [navigate])

  return (
    <div>
      <img className="back-ground" src={image} alt="" />
      <audio autoPlay>
        <source src={audio13} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default P13;
