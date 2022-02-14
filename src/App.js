import { Fragment } from "react";
import Header from "./componeents/Layout/Header";
import Meals from "./componeents/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
