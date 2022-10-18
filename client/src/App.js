import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Flowers from "./components/Flowers/Flowers";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Flowers />
      </main>
    </Fragment>
  );
}

export default App;
