import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import { data } from "./data";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "black", fontSize: "30px"}} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const Carousel = () => {
  return (

    <div className="carousel" style={{ display: "flex", justifyContent: "center"}} >
      <div style={{ width: "100%"}}>
      <Slider
        autoplay
        autoplaySpeed={2000}
        // dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data[i]}
                alt=""
                style={{
                  width: "100px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "100%", height: "60vh" }} />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Carousel;