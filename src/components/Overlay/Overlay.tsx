import { RouteComponentProps, withRouter } from "react-router-dom";
import "./Overlay.scss";

function Overlay(props: React.PropsWithChildren<RouteComponentProps>) {
  const languageClass = (language: "en" | "es") =>
    props.location.pathname.split("/")[1] === language
      ? "overlay__language overlay__language--accent"
      : "overlay__language";

  const languagedClicked = (language: "en" | "es") => {
    props.history.push(language);
  };

  return (
    <div className="overlay">
      <div className="overlay__language-container">
        <span
          className={languageClass("en")}
          onClick={() => languagedClicked("en")}
        >
          EN
        </span>
        <span className="overlay__language overlay__language-delimiter overlay__language--accent">
          /
        </span>
        <span
          className={languageClass("es")}
          onClick={() => languagedClicked("es")}
        >
          ES
        </span>
      </div>
      <div className="overlay__nav-container"></div>
    </div>
  );
}

export default withRouter(Overlay);
