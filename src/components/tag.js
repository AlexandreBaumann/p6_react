import '../styles/tag.css'

const tagList = ({ item }) => {
    return (
      <div className='tag'>
        {item.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    );
  };

  export default tagList;

  