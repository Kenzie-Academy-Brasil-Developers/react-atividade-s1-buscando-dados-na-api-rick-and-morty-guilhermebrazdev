import ChaCard from "../ChaCard";
import "../Characters/characters.css";

function Characters({ lista }) {
  return (
    <div id="showCard">
      <div id="title">
        <h1>Meus Personagens</h1>
      </div>

      <div id="cards">
        {lista.map((element) => {
          return <ChaCard key={element.id} card={element} />;
        })}
      </div>
    </div>
  );
}

export default Characters;
