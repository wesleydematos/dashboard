import logo from "@/assets/dummy.png"
import { StyledItems, StyledLogo, StyledNav, StyledSingOut } from "./style"
import { Link } from "react-router-dom"
import dash from "@/assets/dash.png"
import leader from "@/assets/leader.png"
import order from "@/assets/order.png"
import products from "@/assets/products.png"
import sales from "@/assets/sales.png"
import message from "@/assets/message.png"
import settings from "@/assets/settings.png"
import signout from "@/assets/signout.png"

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
              <img src={dash} alt="Pizza graph" />
              <p>Dashboard</p>
            </Link>
            </li>
          <li>
            <Link to="/leaderboard">
              <img src={leader} alt="Graph" />
              <p>Leaderboard</p>
            </Link>
            </li>
          <li>
            <Link to="/order">
              <img src={order} alt="Shopping cart" />
              <p>Order</p>
            </Link>
            </li>
          <li>
            <Link to="/products">
              <img src={products} alt="Shopping bag" />
              <p>Products</p>
            </Link>
            </li>
          <li>
            <Link to="/sales-report">
              <img src={sales} alt="Graph" />
              <p>Sales Report</p>
            </Link>
            </li>
          <li>
            <Link to="/message">
              <img src={message} alt="Mailbox" />
              <p>Message</p>
            </Link>
            </li>
          <li>
            <Link to="/settings">
              <img src={settings} alt="Gear" />
              <p>Settings</p>
            </Link>
            </li>
        </StyledItems>
        <StyledSingOut>
          <img src={signout} alt="botão de sair" />
          <p>Sign Out</p>
        </StyledSingOut>
      </StyledNav>
    )
  }
  
export default Nav
  