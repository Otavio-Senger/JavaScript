import { Header } from "../../components/header";
import "./style.css";
export function Checkout() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="completeseupedido">
          <h1 className="title">Complete seu pedido</h1>

          <form action="">
            <h3 className="entrega">Endereço de entrega</h3>
            <h4 className="subEntrega">
              Informe o endereço onde deseja receber seu pedido
            </h4>

            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />

            <div className="numeroAndComplemento">
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento Opcional" />
            </div>

            <div className="bairroCidadeAndUF">
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>

          <div className="pagamento">
            <h1 id="pagamento">Pagamento</h1>
            <p className="subPagamento">
              O pagamento é feito na entrega. Escolha a forma de pagamento
            </p>
            <div className="butons">
              <button className="credito">CARTÃO DE CRÉDITO</button>
              <button className="debito">CARTÃO DE DÉBITO</button>
              <button className="dinheiro">DINHEIRO</button>
            </div>
          </div>
        </div>

        <div className="cafesselecionados">
          <div className="cafes">
            <img
              src="../../../public/images/coffees/expresso.png"
              alt=""
              className="expresso"
            />
          </div>
        </div>
      </div>
    </>
  );
}
