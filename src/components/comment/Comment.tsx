import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentProps as OtherCommentProps } from '../comments/Comments';
import './styles.css';
import { faHeart, faPen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

interface CommentProps extends OtherCommentProps {
  // canEdit: boolean;
}

export const Comment: React.FC<CommentProps> = ({
  user,
  created,
  liked,
  desc,
  id,
}) => {
  const [likes, setLikes] = useState(liked);
  const [isLiked, setIsLiked] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [editText, setEditText] = useState(desc);

  const handleIsLiked = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  };

  const handleEdit = () => {
    setCanEdit(true);
  };

  const handleSave = () => {
    setCanEdit(false);
  };

  return (
    <div>
      <div className='comment-top'>
        <p className='comment-user-nickname'>
          {user}
          {/* <span>{created}</span> */}
        </p>
        <div className='comment-top__btns'>
          <button
            aria-label='like this comment'
            type='button'
            className='comment-likes'
            onClick={handleIsLiked}>
            <FontAwesomeIcon
              className={isLiked ? 'comment-liked' : 'comment-not-liked'}
              icon={faHeart}
            />
            <span>{likes}</span>
          </button>
          {user === 'You' ? (
            <button className='comment-btn comment-edit' onClick={handleEdit}>
              <FontAwesomeIcon icon={faPen} />
              <span>edit</span>
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='comment-content'>
        {canEdit ? (
          <div className='comment-content__wrapper'>
            <textarea
              className='edit-comment'
              value={editText}
              onBlur={handleSave}
              onChange={(e) => setEditText(e.target.value)}></textarea>
            <button className='comment-save' onClick={handleSave}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>
        ) : (
          <p className='comment-text' onClick={handleEdit}>
            {editText}
          </p>
        )}
      </div>
    </div>
  );
};
