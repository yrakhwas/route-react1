import { Fragment } from "react";
import Modal from "./Modal";
import { useState } from "react";

function Privacy() {

    const [show, setShow] = useState(false);

    return (
        <>
            <h2>Privacy Policy</h2>
            <p>
                This is the privacy policy page. Here you can find information about how we handle your data.
            </p>
            <Fragment>
                <p>Hello world</p>
            </Fragment>

            <button onClick={()=>setShow(true)}>Show modal</button>
            {show && (
                <Modal color="blue">
                    <h2 style={{color:"black"}}>Modal Title</h2>
                    <p style={{color:"green"}}>This is a modal content.</p>
                    <button onClick={()=>setShow(false)}>Close</button>
                </Modal>
            )}

        </>
    );
}

export default Privacy;