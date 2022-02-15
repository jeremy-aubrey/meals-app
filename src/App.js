import { Fragment } from "react";
import Header from "./componeents/Layout/Header";
import Meals from "./componeents/Meals/Meals";
import Cart from "./componeents/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
