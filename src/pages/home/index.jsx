import sectorIcon from "../../assets/icons/sector.png";
import Header from "../../components/header";

function Home() {
  return (
    <>
      <Header />
      <h1>Home page</h1>
      <img src={sectorIcon} alt="sector" />
    </>
  );
}

export default Home;
