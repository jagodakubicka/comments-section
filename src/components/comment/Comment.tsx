import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommentProps as OtherCommentProps } from '../comments/Comments';
import './styles.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface CommentProps extends OtherCommentProps {
  canEdit: boolean;
}

export const Comment: React.FC<CommentProps> = ({
  user,
  created,
  liked,
  desc,
  id,
  canEdit,
}) => {
  const [likes, setLikes] = useState(liked);
  const [isLiked, setIsLiked] = useState(false);

  const handleIsLiked = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikes(likes - 1);
    } else {
      setIsLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <div>
      <div className='comment-top'>
        <p className='comment-user-nickname'>
          {user}
          {/* <span>{created}</span> */}
        </p>
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
      </div>
      <div className='comment-content'>
        <p className='comment-text'>{desc}</p>
      </div>
    </div>
  );
};
