import { useState } from 'react';
import { CommentProps as OtherCommentProps } from '../comments/Comments';
import './styles.css';

interface CommentProps extends OtherCommentProps {
  canEdit: boolean;
}

export const Comment: React.FC<CommentProps> = ({
  user,
  created,
  title,
  desc,
  id,
  canEdit,
}) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleIsLiked = () => {
    setIsLiked(!isLiked);
    if (isLiked === true) {
      setLikes(likes - 1);
    }
    if (isLiked === false) {
      setLikes(likes + 1);
    }
  };

  return (
    <div>
      <div className='comment-top'>
        <p className='comment-user-nickname'>
          {user} <span>{created}</span>
        </p>
        <button type='button' className='comment-likes' onClick={handleIsLiked}>
          <span>Likes: </span>
          <span>{likes}</span>
        </button>
      </div>
      <div className='comment-content'>
        <p className='comment-text'>{desc}</p>
      </div>
    </div>
  );
};
