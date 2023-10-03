import Nav from "@/components/Nav"
import Header from "@/components/Header"
import TodaySales from "@/components/TodaySales"
import UsersGraph from "@/components/UsersGraph"
import TargetXReality from "@/components/TargetXReality"
import CustomerSatisfaction from "@/components/CustomerSatisfaction"
import TopSellers from "@/components/TopSellers"
import { StyledDashboard } from "./style"

function DashboardAdm() {
    return (
      <StyledDashboard>
        <Nav />
        <div className="divisor">
          <Header />
          <div className="wrapper">
            <TodaySales />
            <UsersGraph />
            <TargetXReality />
            <CustomerSatisfaction />
            <TopSellers />
          </div>
        </div>
      </StyledDashboard>
    )
  }
  
export default DashboardAdm
  