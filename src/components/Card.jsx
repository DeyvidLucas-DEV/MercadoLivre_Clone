import Product from "../image/smartphone.png";
import '../css/Card.style.css';

export default function Cards() {
  return (
    <div className="CardContainer">
      <div className="image">
        <img src={Product} className="imageContent"/>
      </div>
      <div className="BottomCard">
        <div className="TopTextCard">
          <p className="TextCont">Smartphone Samsungo</p>
        </div>
        <div className="ValueCard">
          <p className="ValueDiscount">R$5.0000</p>
          <div className="ValueCont">
            <p className="RealValue">R$2000</p>
            <p className="DiscountTotal">58%</p>
            <p className="OFF">OFF</p>
          </div>
        </div>
        <div className="PaymentContent">
          <span className="info">em</span>
          <p className="infoContent">10x R$ sem juros</p>
        </div>
        <div className="FreteContainer">
            <p className="FreteP">Frete Gratis Full</p>
        </div>
      </div>
    </div>
  );
}
