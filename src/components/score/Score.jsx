/* eslint-disable react/prop-types */
import "./Score.sass";
import Logo from "../../images/logo.svg";

const Score = ({ score }) => {
  return (
    <section className="score-header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="score-div">
        <span>SCORE</span>
        <p>{score}</p>
      </div>
    </section>
  );
};

export default Score;
