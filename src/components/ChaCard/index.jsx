import "./card.css";

function ChaCard({ card }) {
  return (
    <div
      id="card"
      className={card.status === "Alive" ? "cardGreen" : "cardRed"}
    >
      <h1 id="name">{card.name}</h1>
      <img src={card.image} alt="Foto do personagem" />
      <p> Status:{card.status} </p>
    </div>
  );
}

export default ChaCard;
