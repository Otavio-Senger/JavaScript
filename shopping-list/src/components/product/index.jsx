import {
  Apple,
  Sandwich,
  Carrot,
  Milk,
  Beef,
  EllipsisVertical,
} from "lucide-react";
import "./styles.css";

/* const icons = {
  fruta: Apple,
  padaria: Sandwich,
  legume: Carrot,
  bebida: Milk,
  carne: Beef,
}; */

export function Product({ productName, quantity, type, category }) {
  const Icon = category?.icon;
  return (
    <div className="card-product">
      <div className="details">
        <p>{productName}</p>
        <span>{quantity} {type}</span>
      </div>

      <div className="category">
        <p className={`tag ${type}`}>
          {Icon && <Icon size={16} color={category.color} />}
          {type}
        </p>
        <EllipsisVertical size={20} color="#a881e6" />
      </div>
    </div>
  );
}
