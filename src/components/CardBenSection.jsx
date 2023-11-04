import CardBeneficios from "./CardsBeneficios";
import '../css/CardBeneficios.style.css';
import DisneyStarLogo from '../image/logodisstar.jpg'

export default function CardBenSection(props){
    
    return(
        <>
        <div className="CardSection">
            <CardBeneficios TituloCards="Sem custos com a Meli+" SubTitleCards="Disney+ e Star+" ImageContainer={DisneyStarLogo} />
            <CardBeneficios />
            <CardBeneficios />

        </div>
        </>

    )
}