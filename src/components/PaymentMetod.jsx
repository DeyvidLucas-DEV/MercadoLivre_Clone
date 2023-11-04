import React from "react";
import {
  BsCreditCardFill,
  BsCashCoin,
  BsFillXDiamondFill,
} from "react-icons/bs";
import "../css/PaymentMetod.style.css";

export default function Payment() {
  return (
    <div className="conteinerPayment">
    <div className="container">
      <div className="PaymentSections">
        <div className="TextSection">
          <p className="topText">Pagamento rápido e seguro</p>
          <p className="topText"><span className="texto1">com Mercado Pago</span></p>
        </div>

        <div className="CreditCard">
          <div className="LeftIcon">
            <BsCreditCardFill className="icon" />
          </div>
          <div className="RightText">
            <div className="topText">
              <p className="topText">Até 10 parcelas sem juros</p>
            </div>

            <div className="bottomText">
              <a href="" className="bottomText">
                Ver mais{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="NoCreditSection">
          <div className="LeftIcon">
            <BsCashCoin className="icon" />
          </div>
          <div className="RightText">
            <p className="topText">Parcelamento sem cartão</p>
            <a href="" className="bottomText">
              Conheça o Mercado Crédito
            </a>
          </div>
        </div>

        <div className="PixSection">
          <div className="LeftIcon">
            <BsFillXDiamondFill className="icon" />
          </div>
          <div className="RightText">
            <p className="topText">Via Pix</p>
            <a href="" className="bottomText">
              Ver Mais
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
