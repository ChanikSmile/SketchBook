import Wrapper from "./styles";
import image1 from '../../../../play-background/엄마는 카멜레온_8.gif';
import audio8 from '../../../../play-background/ske_8.mp3';


function P8() {

    return (
        <Wrapper>
            <img src={image1} alt="" />
            <audio autoPlay>
                <source src={audio8} type="audio/mp3" />
            </audio>            
            
        </Wrapper>
    )
}

export default P8;
