import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./index.css";

const DialogContext = createContext();

function DialogBody({ children }) {
  const { display, setDisplay } = useContext(DialogContext);
  useEffect(() => {
    document.body.style = `overflow:${display ? "hidden" : ""}`;
  }, [display]);
  return (
    <section className={`dialog-body ${display ? "flex" : "hidden"}`}>
      <button
        className="dialog-close"
        aria-label="close reserve form"
        onClick={() => setDisplay(false)}
      >
        <FontAwesomeIcon icon={faTimes} size="xl" />
      </button>
      <div className="dialog-content-wrap">{display ? children : ""}</div>
    </section>
  );
}

function Dialog({ trigger, children }) {
  const [display, setDisplay] = useState(false);
  return (
    <DialogContext.Provider value={{ display, setDisplay }}>
      <div onClick={() => setDisplay(true)}>{trigger}</div>
      {createPortal(<DialogBody>{children}</DialogBody>, document.body)}
    </DialogContext.Provider>
  );
}

export default Dialog;
