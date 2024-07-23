import { Link } from "react-router-dom"
import logo from '../img/Logo.png'
import favoriteIcon from '../img/favourites.svg'
import cartIcon from '../img/cart.svg'

export const Header = () => {
	return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">
				<img src={favoriteIcon} alt="" />
			</Link>
      <Link to="/cart">
			<img src={cartIcon} alt="" />
			</Link>
    </div>
  );
}
