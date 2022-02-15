import React from "react";

import styles from "./Modal.module.css";

const Backdrop = props => {
    return <div className={styles.backdrop} />
};

const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
};

const Modal = props => {
    return 
}

export default Modal;