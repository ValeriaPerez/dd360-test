import { Modal, Card, CardContent } from '@mui/material';
import type { ModalProps } from './Modal.props';

const modalStyle = `
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 'auto',
  padding: 0,
  bgcolor: 'background.paper',
  boxShadow: 24,
`;

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

