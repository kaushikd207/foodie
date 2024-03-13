import LocationCityIcon from "@mui/icons-material/LocationCity";
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
export default Card;
