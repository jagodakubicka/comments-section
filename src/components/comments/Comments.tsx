import './styles.css';
import data from '../../data/data.json';
import { useState } from 'react';
import { Comment } from '../comment/Comment';

export interface CommentProps {
  user: string;
  created: string;
  title: string;
  desc: string;
  id: number;
}

export const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>(data);
  const [newComment, setNewComment] = useState<CommentProps>({
    user: 'You',
    created: '',
    title: '',
    desc: '',
    id: comments.length + 1,
  });
  const [canEdit, setCanEdit] = useState(false);

  const createNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({
      ...newComment,
      desc: e.target.value,
    });
  };

  const addNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment({
      ...newComment,
      desc: '',
    });
  };

  const handleDeleteComment = () => {
    console.log('removed');
  };

  return (
    <main className='comments'>
      <ul>
        {comments.map((comment, index) => {
          return (
            <li key={comment.id} className='comment'>
              <Comment {...comment} canEdit={canEdit} />
              <div className='comment-bottom'>
                {comment.user === 'You' ? (
                  <>
                    <button
                      className='comment-btn comment-delete'
                      onClick={handleDeleteComment}>
                      delete
                    </button>
                    {/* <button
                      className='comment-btn comment-edit'
                      onClick={() => setCanEdit(!canEdit)}>
                      edit
                    </button> */}
                  </>
                ) : (
                  ''
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <form onSubmit={addNewComment}>
        <label htmlFor='new-comment'>Add new comment</label>
        <textarea
          onChange={createNewComment}
          required
          id='new-comment'
          className='new-comment'
          value={newComment.desc}
        />
        <button className='submit-btn' type='submit'>
          Add +
        </button>
      </form>
    </main>
  );
};
