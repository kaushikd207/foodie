import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navBar">
      <div className="homeLogo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq_wlBtR6LyQxJkT-_E8V3hCsorB67C17hwKTNHc0Dx7V1uGwiAtZ_Vv_1Q&s"></img>
      </div>
      <div className="menuItem">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
