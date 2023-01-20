import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overley-root")
      )}
    </React.Fragment>
  );
}
