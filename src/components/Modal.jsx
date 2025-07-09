import { createPortal } from "react-dom";

function Modal({children, color="black"}) {
    return createPortal(
        <div className="modal" style={{backgroundColor: color}}>
            {children},
        </div>,
        document.getElementById("modal")
    )
}

export default Modal;