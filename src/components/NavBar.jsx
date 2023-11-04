import '../css/NavBAr.css';
import Logo3 from '../image/mercado.png';
import Logo4 from '../image/assinatur.webp';
import { IoLocationSharp, IoCartOutline } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderTop">
        <li className='HeaderLiTop'>
          <ul className='LiTop'><a href="#"><img src={Logo3} className='HeaderLogo' alt="Logo 3" /></a></ul>
          <ul className='LiTop'>
            <div className="SearchBarDiv">
              <input
                type="text"
                className='SearchBar'
                id='SearchBar'
                placeholder='Buscar produtos, marcas e muito mais...'
              />
            </div>
          </ul>
          <ul className='LiTop'><a href="#"><img src={Logo4} className='HeaderLogo2' alt="Logo 4" /></a></ul>
        </li>
      </div>
      <div className="HeaderBottom">
        <ul className='HeaderList'>
          <li className='ListChildren'>
            <button className='CepButton' > <IoLocationSharp className='iconHeader' /> Informe seu <br /> Cep</button>
          </li>
          <div className="NavBottom">
            <li className='ListChildren'>
              <a href="#" className='NavItems'>Categoria</a>
              <a href="#" className='NavItems'>Oferta do dia</a>
              <a href="#" className='NavItems'>Historico</a>
              <a href="#" className='NavItems'>Moda</a>
              <a href="#" className='NavItems'>Vender</a>
              <a href="#" className='NavItems'>Contato</a>
            </li>
          </div>
          <li className='ListChildren'>
            <a href="#" className='NavItems2'>Crie sua conta</a>
            <a href="#" className='NavItems2'>Entre</a>
            <a href="#" className='NavItems2'>Compras</a>
            <a href="#" className='NavItems2'><IoCartOutline className='iconHeader' /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
