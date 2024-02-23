import "./App.css";

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

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
