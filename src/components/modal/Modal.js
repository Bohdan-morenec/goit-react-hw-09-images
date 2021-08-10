import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import "./modal.scss";

const modal = document.querySelector("#modal");

const Modal = ({ onClose, img }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    console.log(1);
    if (e.code === "Escape") {
      onClose();
    }
  };

  const BackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={BackdropClick}>
      <img className="Modal" src={img} alt="thematic-Photography" />
    </div>,
    modal
  );
};

export default Modal;

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
