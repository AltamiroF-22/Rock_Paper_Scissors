/* eslint-disable react/prop-types */
//icons
import Paper from "../../images/icon-paper.svg";
import Rock from "../../images/icon-rock.svg";
import Scissors from "../../images/icon-scissors.svg";

const RenderUserchoice = ({ userChoiceToRender }) => {
  return (
    <div className="choices">
      <div className="user-choice">
        {userChoiceToRender === "Paper" ? (
          <div className="one">
            <img src={Paper} alt="Paper Icon" />
          </div>
        ) : userChoiceToRender === "Rock" ? (
          <div className="two">
            <img src={Rock} alt="Rock Icon" />
          </div>
        ) : (
          <div className="three">
            <img src={Scissors} alt="Scissors Icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderUserchoice;
