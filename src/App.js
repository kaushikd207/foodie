import "./App.css";
import { restaurants } from "./constants/global";
import LocationCityIcon from "@mui/icons-material/LocationCity";
const Header = () => {
  return (
    <div className="navBar">
      <div className="homeLogo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq_wlBtR6LyQxJkT-_E8V3hCsorB67C17hwKTNHc0Dx7V1uGwiAtZ_Vv_1Q&s"></img>
      </div>
      <div className="menuItem">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Card = ({ restaurant }) => {
  const {
    name,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
    cloudinaryImageId,
  } = restaurant?.info;
  const imgLink = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
  return (
    <>
      <div className="card">
        <div className="cardImage">
          <img src={imgLink}></img>
        </div>
        <h2>{name}</h2>
        <LocationCityIcon />
        <span>
          {locality},{areaName}
        </span>
        <h4>{cuisines.length > 1 ? cuisines.join(", ") : cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <Header />
      <div className="cardBody">
        <div className="cardContainer">
          {restaurants.map((restaurant) => {
            return <Card restaurant={restaurant} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
