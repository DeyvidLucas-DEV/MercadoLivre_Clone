import "../css/CardBeneficios.style.css";
import AS from "../image/hbomod.jpg";
export default function CardBeneficios(props) {
  return (
    <>
      <div className="CardBenefCont" style={props.BackgroundImage}>
        <div className="LogoBen">
          <img src={props.ImageContainer} alt="" className="LogoBens" />
        </div>
        <div className="ContentBen">
          <div className="TopBen">
            <p className="TitleCardBen">{props.TituloCards}</p>
          </div>
          <div className="BottomBen">
            <p className="SubTitleCardben">{props.SubTitleCards}</p>
          </div>
        </div>
      </div>
    </>
  );
}
