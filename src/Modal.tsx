import React from "react";
import "./styles/Modal.css";

const Modal: React.FC = () => {
    const [openLeft, setOpenLeft] = React.useState<boolean>(false);
    const [openRight, setOpenRight] = React.useState<boolean>(false);

    return (
        <>
            <section>
                <button
                    className="open-modal-btn"
                    onClick={(): void => setOpenLeft(true)}
                >
                    ✨ Открыть окно
                </button>
                {openLeft && (
                    <div className="overlay">
                        <div className="modal">
                            <svg
                                height="200"
                                viewBox="0 0 200 200"
                                width="200"
                                onClick={() => setOpenLeft(false)}
                            >
                                <title />
                                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                            </svg>
                            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                        </div>
                    </div>
                )}
            </section>
            <section>
                <button
                    className="open-modal-btn"
                    onClick={(): void => setOpenRight(true)}
                >
                    Открыть окно ✨
                </button>
                <div className={`overlay animated ${openRight ? "show" : ""}`}>
                    <div className="modal modal--right">
                        <svg
                            height="200"
                            viewBox="0 0 200 200"
                            width="200"
                            onClick={() => setOpenRight(false)}
                        >
                            <title />
                            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                        </svg>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rotating_earth_%28large%29.gif/200px-Rotating_earth_%28large%29.gif" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Modal;
