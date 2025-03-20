import "./styles.css";

export function Card({ imgURL, name, description, price }) {
  return (
    <div className="card">
      <img src={imgURL} alt={name} className="product-img" />
      
      <div className="product-details">
      
      <h1>{name}</h1>
      <p>{description}</p>
      <strong>R$ {price}</strong>
      </div>
      <button type="button">Comprar agora</button>
    </div>
  );
}
