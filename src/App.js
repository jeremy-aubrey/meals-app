import { Fragment, useState } from "react";
import Header from "./componeents/Layout/Header";
import Meals from "./componeents/Meals/Meals";
import Cart from "./componeents/Cart/Cart";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
