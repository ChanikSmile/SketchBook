import Wrapper from "./styles";
import image from "../../../../play-background/엄마는 카멜레온_14.gif";
import audio14 from "../../../../play-background/ske_14.mp3";
import { useNavigate } from "react-router";
import axios from "axios";

function P14() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/play/story1/p15");
  }, 8000);

  const mission = (e) => {
    axios
      .post("/api/devices/mission", {
        flag: "0", // mission이 없으면 0 있으면 1
      })
      .then((res) => {
        // console.log(res.data.mission);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper onLoad={mission}>
      <img src={image} alt="" />
      <audio autoPlay>
        <source src={audio14} type="audio/mp3" />
      </audio>
    </Wrapper>
  );
}

export default P14;
