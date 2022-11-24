const EventEmittier = require("events");

const emitter = new EventEmittier();

class Dispatcher extends EventEmittier {
  subscribe(eventName, cb) {
    console.log("[Subscribe...]");
    this.on(eventName, cb);
  }
  dispatch(eventName, data) {
    console.log("[Dispatching...]");
    this.emit(eventName, data);
  }
}

const method = new Dispatcher();

method.dispatch("aa", { aa: 33 });

method.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});
