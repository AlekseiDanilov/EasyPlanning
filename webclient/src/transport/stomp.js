import webstomp from "webstomp-client";
import SockJS from "sockjs-client";
import { observable } from "mobx";

class StompClient {
  client;
  @observable connected = false;

  constructor() {
    this.client = webstomp.over(new SockJS("/ws"));
  }

  connect() {
    this.client.connect(
      {},
      () => {
        this.connected = true;
      },
      res => {
        console.log("failed connect" + res);
      }
    );
  }

  disconnect() {
    this.client.disconnect(() => {
      this.connected = false;
    });
  }
}

const stomp = new StompClient();
export default stomp;
