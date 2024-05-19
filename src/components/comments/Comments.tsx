import './styles.css';
import data from '../../data/data.json';
import { useState } from 'react';
import { Comment } from '../comment/Comment';

interface CommentProps {
  user: string;
  title: string;
  desc: string;
  id: number;
}

export const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>(data);
  const [newComment, setNewComment] = useState({
    user: 'You',
    title: '',
    desc: '',
    id: 0,
  });
  console.log('comment content', newComment);

  const addNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({
      ...newComment,
      desc: e.target.value,
    });
  };
  return (
    <main className='comments'>
      <ul>
        {comments.map((comment, index) => {
          return (
            <li key={index}>
              <Comment />
            </li>
          );
        })}
      </ul>
      <form>
        <label htmlFor='new-comment'>Add new comment</label>
        <textarea
          onChange={addNewComment}
          required
          id='new-comment'
          className='new-comment'
        />
        <button className='submit-btn' type='submit'>
          Add
        </button>
      </form>
    </main>
  );
};
