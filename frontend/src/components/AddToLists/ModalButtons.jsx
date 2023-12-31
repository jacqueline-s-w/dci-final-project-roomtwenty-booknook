import React from "react";

const ModalButtons = ({ isBookOnList, serverURL, handleButtonClick }) => {
    return (
        <>
            <button
                className="book-actions-add-to-lists want-to-read-modal"
                onClick={() =>
                    handleButtonClick(
                        `${serverURL}/books/addBooks/wantToRead`,
                        "wantToRead"
                    )
                }
            >
                Möchte ich lesen
            </button>
            <button
                className="book-actions-add-to-lists currently-reading-modal"
                onClick={() =>
                    handleButtonClick(
                        `${serverURL}/books/addBooks/currentlyReading`,
                        "currentlyReading"
                    )
                }
            >
                Lese ich gerade
            </button>
            <button
                className="book-actions-add-to-lists already-read-modal"
                onClick={() =>
                    handleButtonClick(
                        `${serverURL}/books/addBooks/alreadyRead`,
                        "alreadyRead"
                    )
                }
            >
                Habe ich schon gelesen
            </button>
        </>
    );
};

export default ModalButtons;
