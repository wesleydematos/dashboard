import { StyledHeader } from "./style"
import bell from "@/assets/bell.png"
import vector1 from "@/assets/vector1.png"
import arrowdown from "@/assets/arrowdown.png"

function Header() {
    return (
      <StyledHeader>
        <h1>Dashboard</h1>
        <div>
          <div className="bell">
            <img src={vector1} alt="vector" />
            <img src={bell} alt="Bell" />
          </div>
          <div className="user">
            <p>User</p>
            <span>Admin</span>
          </div>
          <div className="arrow">
            <img src={arrowdown} alt="Arrow Down" />
          </div>
        </div>
      </StyledHeader>
    )
  }
  
export default Header
  