import React from "react";

import styles from "./Header.module.css";
import foodImage from "../../assets/food.jpg";

const Header = props => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Meals</h1>
                <button>Cart</button>
            </header>
            <div className={styles['main-image']}>
                <img src={foodImage} alt="A table full of food." />
            </div>
        </React.Fragment>
    );
};

export default Header;