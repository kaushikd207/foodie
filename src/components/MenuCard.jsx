import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "./server/menuItem.slice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";

const MenuCard = () => {
  const { restId } = useParams();
  const dispatch = useDispatch();
  const menuItemData = useSelector((state) => state.menuItem.data);
  useEffect(() => {
    getMenuData();
  }, []);
  const getMenuData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${restId}&catalog_qa=undefined&isMenuUx4=true&sub`
    );
    const json = await data.json();
    dispatch(
      setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    );
  };
  const imgLink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <>
      <div className="menuContainer">
        {menuItemData?.map((menu) => {
          const menuList = menu?.card?.card;
          return menu?.card?.card?.title &&
            menu?.card?.card?.itemCards?.length > 0 ? (
            <>
              <Accordion defaultExpanded={true}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <h3>
                    {`${menu?.card?.card?.title}(${menu?.card?.card?.itemCards?.length})`}
                  </h3>
                </AccordionSummary>
                <AccordionDetails>
                  {menuList?.itemCards?.map((underItem) => {
                    return (
                      <>
                        <div className="subItemContainer">
                          <div>
                            <h5>{underItem.card.info.name}</h5>
                            <p>Rs-{underItem.card.info.price / 100}</p>
                          </div>
                          <div>
                            <img
                              className="subItemImg"
                              src={imgLink + underItem?.card?.info?.imageId}
                              alt="Image is not available"
                            ></img>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </>
          ) : null;
        })}
      </div>
    </>
  );
};

export default MenuCard;
