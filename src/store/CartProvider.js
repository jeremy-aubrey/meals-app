import { useReducer } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import CartContext from "./cart-context";

//wrapper to allow children access to context

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        //check to see if item id is already present
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id)

        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;

        if(existingCartItem) {
            const updatedItem = 
            {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            //overwrite old item with updated
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount
        };
    }

    if (action.type === 'REMOVE_ITEM') {

    }

    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addToCartHandler = item => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item })
    };

    const removeFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeFromCartHandler
    };


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;