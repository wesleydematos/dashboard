import logo from "@/assets/dummy.png"
import { StyledItems, StyledLogo, StyledNav } from "./style"
import { Link } from "react-router-dom"
import dash from "@/assets/dash.png"
import leader from "@/assets/leader.png"
import order from "@/assets/order.png"
import products from "@/assets/products.png"
import sales from "@/assets/sales.png"
import message from "@/assets/message.png"
import settings from "@/assets/settings.png"

function Nav() {
    return (
      <StyledNav>
        <StyledLogo>
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>
          <h2>Site</h2>
        </StyledLogo>
        <StyledItems>
          <li>
            <Link to="/">
              <img src={dash} alt="Gráfico pizza" />
              <p>Dashboard</p>
            </Link>
            </li>
          <li>
            <Link to="/leaderboard">
              <img src={leader} alt="Gráfico" />
              <p>Leaderboard</p>
            </Link>
            </li>
          <li>
            <Link to="/order">
              <img src={order} alt="Carrinho de compras" />
              <p>Order</p>
            </Link>
            </li>
          <li>
            <Link to="/products">
              <img src={products} alt="Sacola de compras" />
              <p>Products</p>
            </Link>
            </li>
          <li>
            <Link to="/sales-report">
              <img src={sales} alt="Gráfico" />
              <p>Sales Report</p>
            </Link>
            </li>
          <li>
            <Link to="/message">
              <img src={message} alt="Caixa de mensagens" />
              <p>Message</p>
            </Link>
            </li>
          <li>
            <Link to="/settings">
              <img src={settings} alt="Engrenagem" />
              <p>Settings</p>
            </Link>
            </li>
        </StyledItems>
      </StyledNav>
    )
  }
  
export default Nav
  