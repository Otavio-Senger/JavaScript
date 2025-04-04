import { Hearder } from "./components/hearder";
import { Form } from "./components/form";
import { Product } from "./components/product";
import shopppingList from "../data.json";




export function App() {
  return (
    <>
      <Hearder />
      <div className="container">
        <Form />
        <div className="product-list">
          {shopppingList.lista_de_compras.map(
            /* desestruturação */
            ({ nome, quantidade, tipo }, index) => (
              <Product
                key={index}
                productName={nome}
                quantity={quantidade}
                type={tipo}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
