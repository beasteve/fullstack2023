import BottomFooter from "../components/footer/BottomFooter";
import Forth from "../components/forth/Forth";
import Header from "../components/header/Header";
import Last from "../components/last/Last";
import Question from "../components/question/Question";
import Second from "../components/second/Second";
import Third from "../components/third/Third";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <hr />
      <Second />
      <hr />
      <Third />
      <hr />
      <Forth />
      <hr />
      <Last />
      <hr />
      <Question />
      <hr />
      <BottomFooter />
    </div>
  );
};

export default Home;
