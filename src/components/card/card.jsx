import './card.css';

const Card = ({ item }) => {
  return (
    <a href={`/fiche-produit/${item.id}`}>
      <div className='card'>
      <img className='cardImg' src={item.cover} />
      <p className="cardTxt">{item.title}</p> 
    </div></a>
  );
};

export default Card;
 