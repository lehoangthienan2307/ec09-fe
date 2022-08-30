import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const About = () => {
  return (
    <div
      className="about"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>ABOUT</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://img.freepik.com/free-vector/super-sale-horizontal-banner_52683-59532.jpg?w=2000" />
          <Card img="https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg?w=2000" />
          <Card img="https://img.freepik.com/free-vector/modern-style-big-sale-banner-template_1017-23977.jpg?w=2000" />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        Nhóm 9
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>HUIMITU CEO</span> ,
        Nhóm 9
      </p>
    </div>
  );
};

export default About;