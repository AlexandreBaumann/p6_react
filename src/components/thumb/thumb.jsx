import './thumb.css';

const Thumb = ({ item }) => {
  return (
    <div className='thumb'>
      <img className='thumbImg' />
      <p className="thumbTxt">{item.name}</p>
    </div>
  );
};

export default Thumb;
