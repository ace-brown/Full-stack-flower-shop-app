import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import flowerImage from "../../assets/flower.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Flowery</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={flowerImage} alt="A flower!" />
      </div>
    </Fragment>
  );
};

export default Header;
