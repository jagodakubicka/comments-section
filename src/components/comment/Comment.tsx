import { useState } from 'react';
import { CommentProps } from '../comments/Comments';
import './styles.css';

export const Comment: React.FC<CommentProps> = (data) => {
  const [likes, setLikes] = useState(0);
  const [canEdit, setCanEdit] = useState(false);

  return (
    <div className='comment'>
      <div className='comment-top'>
        <p className='comment-user-nickname'>{data.user}</p>
        <button
          type='button'
          className='comment-likes'
          onClick={() => setLikes(likes + 1)}>
          <span>Likes: </span>
          <span>{likes}</span>
        </button>
      </div>
      <div className='comment-content'>
        <textarea
          className='comment-text'
          disabled={!canEdit ? true : false}
          value={data.desc}
        />
      </div>
      <div className='comment-bottom'>
        {data.user === 'You' ? (
          <>
            <button className='comment-btn comment-delete'>delete</button>
            <button
              className='comment-btn comment-edit'
              onClick={() => setCanEdit(!canEdit)}>
              edit
            </button>
          </>
        ) : (
          ''
        )}

        <button className='comment-btn comment-reply'>reply</button>
      </div>
    </div>
  );
};
