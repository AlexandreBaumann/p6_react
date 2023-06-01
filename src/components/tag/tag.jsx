import './tag.css'

function TagList({ tags }) {
  return (
    <div className='taglist'>
      {tags.map((tag, index) => (
        <div className='tag' key={index}>
          {tag}
        </div>
      ))}
    </div>
  );
}

  export default TagList;

  