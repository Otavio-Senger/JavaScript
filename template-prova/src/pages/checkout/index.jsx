import { Header } from "../../components/header";
import "./style.css";
import { useState } from "react";
import {
  Plus,
  Minus,
  MapPin,
  DollarSign,
  CreditCard,
  Landmark,
  Banknote,
  Trash2,
} from "lucide-react";

export function Checkout() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <Header />
      <div className="container1">
        <h1 className="titleComplete">Complete seu pedido</h1>
        <div className="completeseupedido">
          <div className="titleAndSubEntega">
            <div className="TitleAndIconLocation">
              <p>
                <MapPin size={22} color="#C47F17" className="LocationIcon" />
              </p>
              <h3 className="entregaTitle">Endereço de Entrega</h3>
            </div>
            <h4 className="subEntrega">
              Informe o endereço onde deseja receber seu pedido
            </h4>
          </div>
          <form action="" className="form">
            <input type="number" placeholder="CEP" className="cep" />
            <input type="text" placeholder="Rua" className="rua" />

            <div className="numeroAndComplemento">
              <input type="number" placeholder="Número" className="number" />
              <input
                type="text"
                placeholder="Complemento Opcional"
                className="complemento"
              />
            </div>

            <div className="bairroCidadeAndUF">
              <input type="text" placeholder="Bairro" className="bairro" />
              <input type="text" placeholder="Cidade" className="city" />
              <input type="text" placeholder="UF" className="uf" />
            </div>
          </form>
        </div>
        <div className="pagamento">
          <div className="pagamentoAndSub">
            <div className="titleAndIconPagamento">
              <p>
                <DollarSign size={22} color="#8047F8" />
              </p>
              <h1 id="titlePagamento">Pagamento</h1>
            </div>
            <p className="subPagamento">
              O pagamento é feito na entrega. Escolha a forma de pagamento
            </p>
          </div>
          <div className="buttonsCards">
            <button className="credito">
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </button>
            <button className="debito">
              <Landmark size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </button>
            <button className="dinheiro">
              <Banknote size={16} color="#8047F8" />
              DINHEIRO
            </button>
          </div>
        </div>
        <h1 className="titleSelecionados">Cafés selecionados</h1>
        <div className="cafesselecionados">
          <div className="expresso">
            <div className="imgTitleContador1Delete1">
              <img
                src="../../../public/images/coffees/expresso.png"
                alt=""
                className="IMGexpresso"
              />
              <div className="titleAndButtonsExpresso">
                <h1 className="titleExpresso">Expresso Tradicional</h1>

                <div className="buttonsExpresso">
                  <div className="contador1">
                    <button onClick={() => setContador(contador - 1)}>
                      <Minus className="minus" size={10} color="#8047F8" />
                    </button>
                    <p>{contador}</p>
                    <button onClick={() => setContador(contador + 1)}>
                      <Plus className="plus" size={10} color="#8047F8" />
                    </button>
                  </div>

                  <button type="button" className="delete1">
                    <Trash2 />
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <p className="priceExpresso">R$ 9,90</p>
          </div>

          <div className="latte">
            <div className="imgLatteContador2delete2">
              <img
                src="../../../public/images/coffees/latte.png"
                alt=""
                className="IMGlatte"
              />
              <div className="titleAndButtonsLatte">
                <h1 className="titleLatte">Latte</h1>

                <div className="buttonsLatte">
                  <div className="contador2">
                    <button onClick={() => setContador(contador - 1)}>
                      <Minus className="minus" size={10} color="#8047F8" />
                    </button>
                    <p>{contador}</p>
                    <button onClick={() => setContador(contador + 1)}>
                      <Plus className="plus" size={10} color="#8047F8" />
                    </button>
                  </div>

                  <button type="button" className="delete2">
                    <Trash2 />
                    Remover
                  </button>
                </div>
              </div>
            </div>
            <p className="priceLatte">R$ 19,80</p>
          </div>

          <div className="totalANDentrega">
            <div className="totalItens">
              <h2 className="totalItensTitle">Total de itens</h2>
              <h2 className="priceTotalItens">R$ 29,70</h2>
            </div>
            <div className="entrega">
              <h2 className="entregaTitle">Entrega</h2>
              <h2 className="priceEntrega">R$ 3,50</h2>
            </div>
            <div className="total">
              <h1 className="totalTitle">Total</h1>
              <h1 className="priceTotal">R$ 33,20</h1>
            </div>
            <button type="button" className="confirmar">
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
