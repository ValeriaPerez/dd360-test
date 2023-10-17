import { Modal } from '@mui/material';
import type { ModalProps } from './Modal.props';

export default function NestedModal({
  children = 'contenido',
  handleClose,
  open,
}: ModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '100%',
        width: 'auto',
        padding: 0,
        backgroundColor: 'transparent',
      }}>
        {children}
      </div>
    </Modal>
  );
}

