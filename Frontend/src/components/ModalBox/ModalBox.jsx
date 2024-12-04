import styles from "./ModalBox.module.css";

function ModalBox({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.modalHeader}>
          <h2>Chọn GreenFood Voucher</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <span class="material-symbols-rounded">close</span>
          </button>
        </header>
        <div className={styles.modalBody}>{children}</div>
        <footer className={styles.modalFooter}>
          <button className={styles.cancelButton} onClick={onClose}>
            TRỞ LẠI
          </button>
          <button className={styles.okButton}>OK</button>
        </footer>
      </div>
    </div>
  );
}

export default ModalBox;
