import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const cartItemCount = items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;
    

    useEffect(() => {

        if(cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        //reset button state so animation can replay
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300)

        //clean up
        return () => {
            clearTimeout(timer);
        };

    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {cartItemCount}
            </span>
        </button>
    );
};

export default HeaderCartButton;