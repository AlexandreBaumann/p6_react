import '../styles/thumb.css';

const Thumb = ({ item }) => {
  return (
    <div className='thumb'>
      <img className='thumbImg' />
      <p className="thumbTxt">{item}</p>
    </div>
  );
};

export default Thumb;

// const Thumb = ({ item }) => {
//   return (
//     <img className='thumb' src={item.host.picture} alt="Thumb" />
//   );
// };