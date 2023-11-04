import "../css/MeliAds.style.css";
import MeliIma from "../image/meliads.png";
import Truck from "../image/truck.png";
import Disney from "../image/disney.png";
import Deezer from "../image/deezer.png";
import Discount from "../image/discount.png";

export default function MeliAds() {
  return (
    <>
      <div className="MeliContent">
        <div className="MeliAdsContainer">
          <div className="TopContentAds">
            <div className="LeftAdsContent">
              <div className="TitleAds">
                <span className="TitleAdsM">Assine o</span>
              </div>
              <div className="AdsImage">
                <img src={MeliIma} className="MeliImage" />
              </div>
            </div>
            <div className="RightAdsContent">
              <span className="TitleRigth">
                <p className="Price">R$ 17</p> <sup className="sup">99</sup>
                <div className="MesContent">
                  <span>/MES</span>
                </div>
              </span>
            </div>
          </div>
          <div className="MiddleContentAds">
            <div className="topMiddle">
              <span className="ContentTop">
                Conte com os melhores benefícios no Mercado Livre e do Mercado
                Pago
              </span>
              <div className="ContentBottom">
                <div className="FreteContent">
                  <div className="ImageContentAds">
                    {" "}
                    <img src={Truck} className="PNGCONTENT" />
                  </div>
                  <p className="TextTruck">
                    Frete grátis em milhões de produtos a partir <br /> de R$ 29
                  </p>
                </div>
                <div className="DisneyContent">
                  <div className="ImageContentAds">
                    {" "}
                    <img src={Disney} alt="" className="PNGCONTENT" />
                  </div>
                  <p className="TextDisney">
                    Disney+ e Star+ sem <br /> custo
                  </p>
                </div>
                <div className="DeezerContent">
                  <div className="ImageContentAds">
                    {" "}
                    <img src={Deezer} alt="" className="PNGCONTENT" />
                  </div>
                  <p className="Deezertext">
                    12 meses grátis da Deezer Premium
                  </p>
                </div>
                <div className="DiscountContent">
                  <div className="ImageContentAds">
                    {" "}
                    <img src={Discount} alt="" className="PNGCONTENT" />
                  </div>
                  <p className="DiscountContentAds">
                    60% OFF no Ultrapasse <br /> e outros benefícios
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="BottomContentAds">
            <button className="ButtonChildren">Assinar o Meli+</button>
          </div>
        </div>
      </div>
    </>
  );
}
