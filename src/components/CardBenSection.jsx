import CardBeneficios from "./CardsBeneficios";
import "../css/CardBeneficios.style.css";
import DisneyStarLogo from "../image/logodisstar.jpg";
import Paramount from "../image/logopara.png";
import Hbo from "../image/logohbo.png";

export default function CardBenSection(props) {
  return (
    <>
      <div className="CardSection">
        <div className="DivTitleBen">
          <p className="TextTitle">Benefícios em conteúdo</p>
        </div>
        <div className="ContentBens">
          <CardBeneficios
            TituloCards="Sem custos com a Meli+"
            SubTitleCards="Disney+ e Star+"
            ImageContainer={DisneyStarLogo}
          />
          <CardBeneficios
            TituloCards="Até 30% OFF"
            SubTitleCards="HBO MAX"
            ImageContainer={Hbo}
          />
          <CardBeneficios
            TituloCards="Até 30% OFF"
            SubTitleCards="Paramount+"
            ImageContainer={Paramount}
          />
        </div>
      </div>
    </>
  );
}
