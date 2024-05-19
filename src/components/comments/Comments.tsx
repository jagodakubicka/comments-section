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
    id: comments.length + 1,
  });

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
  console.log('comments', comments);
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
      <form onSubmit={addNewComment}>
        <label htmlFor='new-comment'>Add new comment</label>
        <textarea
          onChange={createNewComment}
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
