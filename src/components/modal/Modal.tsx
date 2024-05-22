import { faClose, faWarning } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ModalProps {
  type: 'danger' | 'success' | 'warning';
  title: string;
  text?: string;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const Modal: React.FC<ModalProps> = ({
  type,
  title,
  text,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='button-close' type='button' onClick={onCancel}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <FontAwesomeIcon className='danger-color modal-icon' icon={faWarning} />
        <p>{title}</p>
        <p>{text}</p>
        <div className='modal-buttons'>
          <button className='button-cancel' onClick={onCancel}>
            Cancel
          </button>
          <button className='button-confirm' onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
