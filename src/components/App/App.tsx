import "./App.scss";
import Pane from "../Pane/Pane";
import Intro from "../Intro/Intro";
import Overlay from "../Overlay/Overlay";

export default function App() {
  return (
    <div className="app">
      <Overlay />
      <div className="app__scroller">
        <Pane>
          <Intro />
        </Pane>
        <Pane />
      </div>
    </div>
  );
}
