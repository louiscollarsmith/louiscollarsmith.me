import { hashString } from "react-hash-string";
import "./Intro.scss";

export default function Intro() {
  const topSubtitle = "Hi, my name is";
  const bottomSubtitle = "and I'm a Software Engineer.";
  const title = "Louis Collar-Smith";

  const phraseToSpans = (phrase: string): JSX.Element[] => {
    const hash = hashString(phrase);
    return phrase.split("").map((letter, i) => (
      <span key={`${hash}_${i}`} className="intro__letter">
        {letter}
      </span>
    ));
  };

  return (
    <section className="intro">
      <div className="intro__title-container">
        <div className="intro__subtitle intro__subtitle--left">
          {phraseToSpans(topSubtitle)}
        </div>
        <div className="intro__title">{phraseToSpans(title)}</div>
        <div className="intro__subtitle intro__subtitle--right">
          {phraseToSpans(bottomSubtitle)}
        </div>
      </div>
    </section>
  );
}
