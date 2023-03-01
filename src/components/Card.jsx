import "../styles/Card.css";
import reaction from "../images/icon-reaction.svg";
import memory from "../images/icon-memory.svg";
import verbal from "../images/icon-verbal.svg";
import visual from "../images/icon-visual.svg";
import data from "../data/data.json";
const Card = () => {
    
  return (
    <section className="card">
      <div className="result">
        <h2>Your Result</h2>
        <div className="circle">
          <p>
            <span>76 </span>
            of 100
          </p>
        </div>
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <div className="reaction">
          <div className="under_reaction">
            <img src={reaction} alt="" />
            <span>{data[0].category}</span>
          </div>
          <p>
            <span>{data[0].score} </span>/100
          </p>
        </div>
        <div className="memory">
          <div className="under_memory">
            <img src={memory} alt="" />
            <span>{data[1].category}</span>
          </div>
          <p>
            <span>{data[1].score}</span>/100
          </p>
        </div>
        <div className="verbal">
          <div className="under_verbal">
            <img src={verbal} alt="" />
            <span>{data[2].category}</span>
          </div>
          <p>
            <span>{data[2].score} </span>/100
          </p>
        </div>
        <div className="visual">
          <div className="under_visual">
            <img src={visual} alt="" />
            <span>{data[3].category}</span>
          </div>
          <p>
            <span>{data[3].score}</span>/100
          </p>
        </div>
        <button>Continue</button>
      </div>
    </section>
  );
};
export default Card;
