import React from "react";
import "./Pane.scss";

interface PaneProps {}

export default function Pane(props: React.PropsWithChildren<PaneProps>) {
  return <div className="pane">{props.children}</div>;
}
