import './styles.css';

export const Comment: React.FC = () => {
  return (
    <div className='comment'>
      <div className='comment-top'>
        <p className='comment-user-nickname'>SwirlingBlueberrySmoothie</p>
        <button type='button' className='comment-likes'>
          <span>O</span>
        </button>
      </div>
      <div className='comment-content'>
        <textarea className='comment-text' disabled>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          deleniti quo earum non enim tempore aperiam eaque maiores, amet et?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          deleniti quo earum non enim tempore aperiam eaque maiores, amet et?
        </textarea>
      </div>
      <div className='comment-bottom'>
        <button className='comment-btn comment-delete'>delete</button>
        <button className='comment-btn comment-edit'>edit</button>
        <button className='comment-btn comment-reply'>reply</button>
      </div>
    </div>
  );
};
