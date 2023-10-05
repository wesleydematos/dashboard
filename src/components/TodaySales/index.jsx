import { StyledTodaySales } from "./style"
import exportimg from "@/assets/export.png"
import salesicon from "@/assets/salesicon.png"
import ordericon from "@/assets/ordericon.png"
import discicon from "@/assets/discicon.png"

function TodaySales() {
    return (
      <StyledTodaySales>
        <div className="texts">
          <div>
            <p>Today&apos;s Sales</p>
            <span>Sales Summary</span>
          </div>
          <button>
            <img src={exportimg} alt="Export"/>
            Export
          </button>
        </div>
        <div className="cards">
          <div>
            <div  className="img">
              <img src={salesicon} alt="Sales icon" />
            </div>
            <h2>$1k</h2>
            <p>Total Sales</p>
            <span>+8% from yesterday</span>
          </div>
          <div>
            <div  className="img">
              <img src={ordericon} alt="Order Icon" />
            </div>
            <h2>300</h2>
            <p>Total Order</p>
            <span>+5% from yesterday</span>
          </div>
          <div>
            <div className="img">
              <img src={discicon} alt="Disc Icon" />
            </div>
            <h2>5</h2>
            <p>Product Sold</p>
            <span>+1.2% from yesterday</span>
          </div>
        </div>
      </StyledTodaySales>
    )
  }
  
export default TodaySales
  