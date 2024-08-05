import { Link } from "react-router-dom"
import logo from '../img/Logo.svg'
import favoriteIcon from '../img/favourites.svg'
import cartIcon from '../img/cart.svg'
import './header.css'

export const Header = () => {
	return (
    <header className="header">
      <div className="header__left">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-li active"><Link to="/">Home</Link></li>
          <li className="header__nav-li">
            <Link to="/catalog">Phones</Link>
          </li>
          <li className="header__nav-li"><a href="#">Tablets</a></li>
          <li className="header__nav-li"><a href="#">Accessories</a></li>
        </ul>
      </nav>
      </div>



      <div className="header__right">
        <Link to="/favorites">
          <img src={favoriteIcon} alt="" />
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" />
        </Link>
      </div>
    </header>
  );
}
