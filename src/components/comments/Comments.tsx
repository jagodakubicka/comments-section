import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data/data.json';
import { useState } from 'react';
import { Comment } from '../comment/Comment';
import { Modal } from '../modal/Modal';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export interface CommentProps {
  user: string;
  created: string;
  liked: number;
  title: string;
  desc: string;
  id: number;
}

export const Comments: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>(data);
  const [newComment, setNewComment] = useState<CommentProps>({
    user: 'You',
    created: '',
    liked: 0,
    title: '',
    desc: '',
    id: comments.length + 1,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState<number | null>(null);

  const createNewComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment({
      ...newComment,
      desc: e.target.value,
    });
  };

  const addNewComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId =
      comments.length > 0 ? Math.max(...comments.map((c) => c.id)) + 1 : 1;
    const commentToAdd = { ...newComment, id: newId };
    setComments([...comments, commentToAdd]);
    setNewComment({
      user: 'You',
      created: '',
      liked: 0,
      title: '',
      desc: '',
      id: newId,
    });
  };

  const confirmDeleteComment = (id: number) => {
    setIsModalVisible(true);
    setCommentToDelete(id);
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
    setIsModalVisible(false);
  };

  return (
    <main className='comments'>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id} className='comment'>
              <Comment {...comment} />
              <div className='comment-bottom'>
                {comment.user === 'You' ? (
                  <>
                    <button
                      className='comment-btn comment-delete'
                      onClick={() => confirmDeleteComment(comment.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                      <span>delete</span>
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
        <div className='new-comment-wrapper'>
          <textarea
            onChange={createNewComment}
            required
            id='new-comment'
            className='new-comment'
            value={newComment.desc}
          />
          <span>New comment</span>
        </div>

        <button
          aria-label='add new comment'
          className='submit-btn'
          type='submit'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      {isModalVisible && (
        <Modal
          type='danger'
          title='Are you sure?'
          text='This action cannot be undone.'
          actionNeeded={true}
          onConfirm={() => handleDeleteComment(commentToDelete!)}
          onCancel={() => setIsModalVisible(false)}></Modal>
      )}
    </main>
  );
};
