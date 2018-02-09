import React from "react";
import { Provider } from "mobx-react";
import rootStore from "./store/RootStore";
import Routing from "./component/routing/Routing";

class App extends React.Component {
  render() {
    return (
      <Provider {...rootStore}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
