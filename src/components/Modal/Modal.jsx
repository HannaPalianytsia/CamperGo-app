import ReactModal from "react-modal";
import icons from "../../assets/icons.svg";
import styles from "./Modal.module.css";
import ModalInfo from "../ModalInfo/ModalInfo";

ReactModal.setAppElement("#root");

const Modal = ({ isModalOpen, closeModal, advert }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: "20px",
      padding: "40px",
    },
    overlay: {
      backgroundColor: "rgba(17, 18, 19, 0.4)",
    },
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button type="button" onClick={closeModal} className={styles.closeBtn}>
        <svg width={32} height={32}>
          <use href={`${icons}#close`}></use>
        </svg>
      </button>
      <ModalInfo advert={advert} />
    </ReactModal>
  );
};

export default Modal;
