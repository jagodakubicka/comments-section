import { CommentProps } from '../comments/Comments';
import './styles.css';

export const Comment: React.FC<CommentProps> = (data) => {
  return (
    <div className='comment'>
      <div className='comment-top'>
        <p className='comment-user-nickname'>{data.user}</p>
        <button type='button' className='comment-likes'>
          <span>O</span>
        </button>
      </div>
      <div className='comment-content'>
        <textarea className='comment-text' disabled value={data.desc} />
      </div>
      <div className='comment-bottom'>
        <button className='comment-btn comment-delete'>delete</button>
        <button className='comment-btn comment-edit'>edit</button>
        <button className='comment-btn comment-reply'>reply</button>
      </div>
    </div>
  );
};
