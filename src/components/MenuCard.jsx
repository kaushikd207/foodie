import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu } from "./server/menuItem.slice";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MenuCard = () => {
  const dispatch = useDispatch();
  const menuItemData = useSelector((state) => state.menuItem.data);
  useEffect(() => {
    getMenuData();
  }, []);
  const getMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=546530&catalog_qa=undefined&isMenuUx4=true&sub"
    );
    const json = await data.json();
    dispatch(
      setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    );
  };
  return (
    <>
      <div className="menuContainer">
        {menuItemData?.map((menu) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {menu?.card?.card?.title}
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
                <button>click Me</button>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
