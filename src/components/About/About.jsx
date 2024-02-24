import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          With a focus on innovation, universities aim to cultivate an
          environment that fosters creativity, critical thinking, and
          problem-solving skills among students, faculty, and staff.
        </p>
        <p>
          Innovation-centric universities often integrate cutting-edge research
          facilities, interdisciplinary collaboration opportunities, and
          entrepreneurial support programs into their academic landscape.
        </p>
        <p>
          In essence, universities with a focus on innovation serve as catalysts
          for societal progress, driving economic growth, fostering
          technological advancements, and nurturing a culture of creativity and
          entrepreneurship within their communities.
        </p>
      </div>
    </div>
  );
};

export default About;
