import image from "../../../../play-background/엄마는 카멜레온_14.gif";
import audio14 from "../../../../play-background/ske_14.mp3";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function P14() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/play/story1/p15");
    }, 8000);

    return () => {clearTimeout(timer)}
  }, [navigate])

  return (
    <div>
      <img className="back-ground" src={image} alt="" />
      <audio autoPlay>
        <source src={audio14} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default P14;
