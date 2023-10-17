import "./Home.sass";

// Components
import UserOptions from "../../components/userOptions/UserOptions";
import Rules from "../../components/gameRules/Rules";

const Home = () => {
  return (
    <div className="home-page">
      <div className="play-area">
        <UserOptions />
      </div>
      <Rules />
    </div>
  );
};

export default Home;
