
import { state } from "./state.js";
import { render } from "./dom.js";
import { pasangEventFilter } from "./events.js";

console.log(state);

render(state);
pasangEventFilter();
