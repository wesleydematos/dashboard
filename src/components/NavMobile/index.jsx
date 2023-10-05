import { StyledItems, StyledLogo, StyledNavMobile, StyledSingOut } from "./style"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "@/assets/dummy.png"
import dash from "@/assets/dash.png"
import leader from "@/assets/leader.png"
import order from "@/assets/order.png"
import products from "@/assets/products.png"
import sales from "@/assets/sales.png"
import message from "@/assets/message.png"
import settings from "@/assets/settings.png"
import signout from "@/assets/signout.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"

function NavMobile() {
  const [navbarMobile, setNavbarMobile] = useState(false);

    return (
      <StyledNavMobile>
        <StyledLogo>
          <div className="logocontent">
            <div>
              <div id="logo">
                <img src={logo} alt="logo" />
              </div>
              <h2>Site</h2>
            </div>
            <button 
            className="hamburguer" 
            onClick={()=>setNavbarMobile(!navbarMobile)}
            >
              {navbarMobile? <IoClose/> : <GiHamburgerMenu/>}
            </button>
          </div>
          {
          navbarMobile && <div className="itemscontent">
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
              <img src={signout} alt="Sign button" />
              <p>Sign Out</p>
            </StyledSingOut>
          </div>
          }
        </StyledLogo>
      </StyledNavMobile>
    )
  }
  
export default NavMobile
  