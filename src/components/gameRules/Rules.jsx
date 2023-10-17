import "./Rules.sass";

import PopUp from "../../images/image-rules.svg";
import Close from "../../images/icon-close.svg";

import { useState } from "react";

const Rules = () => {
  const [popUp, setPopUp] = useState(false);

  // THE FUNCTION TO TOGGLE THE STATES OF THE POPUP WHETHER OR NOT IT IS VISIBLE
  const handleToghlePopUP = () => {
    setPopUp(!popUp);
  };

  return (
    <div className="rules">
      {popUp ? (
        <div className="popIp-out" onClick={() => handleToghlePopUP()}>
          <div className="popUp">
            <div className="popup-header">
              <h3>RULES</h3>
              <button>
                <img src={Close} alt="Close-Icon" />
              </button>
            </div>
            <img src={PopUp} alt="Rules explain" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="rules-btn-div">
        {!popUp ? (
          <button onClick={() => handleToghlePopUP()}>RULES</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Rules;
