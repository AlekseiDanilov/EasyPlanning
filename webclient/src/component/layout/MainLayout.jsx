import React from "react";
import stomp from "../../transport/stomp";
import { observer } from "mobx-react";
import api from "../../transport/rest";

@observer
export default class MainLayout extends React.Component {
  componentWillMount() {
    stomp.connect();
  }

  componentWillUnmount() {
    stomp.disconnect();
  }

  render() {
    return (
      <div>
        <p>Easy planning started!</p>
        <p>{`Server ${stomp.connected ? "connected" : "disconnected"}`}</p>

        <button
          onClick={() => api.get("/test")}
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
        >
          Button
        </button>
      </div>
    );
  }
}
