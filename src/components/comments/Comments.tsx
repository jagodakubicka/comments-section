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
    </main>
  );
};
