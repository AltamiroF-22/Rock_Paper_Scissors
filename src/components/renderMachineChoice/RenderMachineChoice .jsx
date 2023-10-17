/* eslint-disable react/prop-types */
import "./RenderMachineChoice .sass";

//icons
import Paper from "../../images/icon-paper.svg";
import Rock from "../../images/icon-rock.svg";
import Scissors from "../../images/icon-scissors.svg";

const RenderMachineChoice = ({ machineChoiceToRender }) => {
  return (
    <div className="choices">
      <div className="machine-choice">
        {machineChoiceToRender === "Paper" ? (
          <div className="one">
            <img src={Paper} alt="Paper Icon" />
          </div>
        ) : machineChoiceToRender === "Rock" ? (
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

export default RenderMachineChoice;
