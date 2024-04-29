import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurants } from "././server/restaurant.slice";
import Card from "./Card";
import { Link } from "react-router-dom";
const CardBody = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);
  const restaurantList = useSelector(
    (state) => state?.restaurant?.restaurantList
  );
  const dispatch = useDispatch();
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
    dispatch(
      setRestaurants(
        restList?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
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
            const filterredList = restaurantList?.filter((rest) =>
              rest?.info?.name
                ?.toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            e.target.value.length !== 0
              ? setSearchList(filterredList)
              : setSearchList(restaurantList);
          }}
        ></input>
        <button className="searchBtn">Search</button>
      </div>
      <div className="cardBody">
        {searchList?.length > 0 ? (
          <div className="cardContainer">
            {searchList?.map((restaurant, index) => {
              console.log();
              return (
                <Link key={index} to={`/restaurant/${restaurant?.info?.id}`}>
                  <Card restaurant={restaurant} />
                </Link>
              );
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
