import { useEffect, useState } from "react";
import Card from "./Card";
const CardBody = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    getResData();
  }, []);
  const getResData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.12060&lng=91.65230&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restList = await data.json();
    setRestaurant(
      restList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchList(
      restList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            const filterredList = restaurant?.filter((rest) =>
              rest?.info?.name
                ?.toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            e.target.value.length !== 0
              ? setSearchList(filterredList)
              : setSearchList(restaurant);
          }}
        ></input>
        <button className="searchBtn">Search</button>
      </div>
      <div className="cardBody">
        {searchList?.length > 0 ? (
          <div className="cardContainer">
            {searchList?.map((restaurant, index) => {
              return <Card key={index} restaurant={restaurant} />;
            })}
          </div>
        ) : (
          <h4>There is no Restaurant at this time</h4>
        )}
      </div>
    </>
  );
};
export default CardBody;
