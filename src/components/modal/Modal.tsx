import {
  faClose,
  faWarning,
  faCircleCheck,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ModalProps {
  type: 'danger' | 'success' | 'warning';
  title: string;
  text?: string;
  actionNeeded: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const Modal: React.FC<ModalProps> = ({
  type,
  actionNeeded,
  title,
  text,
  onConfirm,
  onCancel,
}) => {
  let icon;

  switch (type) {
    case 'danger':
      icon = faCircleExclamation;
      break;
    case 'success':
      icon = faCircleCheck;
      break;
    case 'warning':
      icon = faWarning;
      break;
    default:
      icon = faWarning;
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button className='button-close' type='button' onClick={onCancel}>
          <FontAwesomeIcon icon={faClose} />
        </button>
        <FontAwesomeIcon className={`${type}-color modal-icon`} icon={icon} />
        <p>{title}</p>
        <p>{text}</p>
        {actionNeeded && (
          <div className='modal-buttons'>
            <button
              className={`button-cancel ${type}-button`}
              onClick={onCancel}>
              Cancel
            </button>
            <button
              className={`button-confirm ${type}-button`}
              onClick={onConfirm}>
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
