import Cards from "./Card";
import "../css/CardContainer.style.css";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export default function ContainerCard() {
  return (
    <>
      <div className="ContainersCards">
        <div className="ContentContainer">
          <div className="CardTitle">
            <span className="TitleOffers">Ofertas do dia</span>
            <a href="#" className="SubOffers">Ver todas</a>
          </div>
          <div className="LocalContent">
            <div className="ArrowLeft">
              <MdArrowBackIos />
            </div>
            <div className="CardsGroup">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="ArrowRight">
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
