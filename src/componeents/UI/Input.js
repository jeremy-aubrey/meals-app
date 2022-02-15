import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.config.id}>{props.label}</label>
            <input ref={ref} {...props.config} />
        </div>
    );
});

export default Input;