import logoImg from "./assets/la-pizza/logo.svg";
import { Card } from "./components/card";
import LaCumaIMG from "./assets/la-pizza/pizza-1.png";

export function App() {
  return (
    <>
      <div className="container">
        <img src={logoImg} alt="La Pizza Pedaço da Itália" className="logo" />
      </div>
      <div className="products-containers">
        <h1 className="title">Mais Vendidos</h1>

        <div className="product">
          <Card
            imgURL={LaCumaIMG}
            name="La Cuma"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            price="29,90"
          />
        </div>
      </div>
    </>
  );
}
