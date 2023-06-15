import "./card.scss";

const Card = ({ item }) => {
  return (
    <a href={`/fiche-produit/${item.id}`}>
      <div className="card">
        <img className="cardImg" src={item.cover} alt="illustration" />
        <p className="cardTxt">{item.title}</p>
      </div>
    </a>
  );
};

export default Card;
