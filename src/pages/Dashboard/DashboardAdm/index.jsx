import Nav from "@/components/Nav"
import Header from "@/components/Header"
import TodaySales from "@/components/TodaySales"
import UsersGraph from "@/components/UsersGraph"
import TargetXReality from "@/components/TargetXReality"
import CustomerSatisfaction from "@/components/CustomerSatisfaction"
import TopSellers from "@/components/TopSellers"

function DashboardAdm() {
    return (
      <>
        <Nav />
        <Header />
        <TodaySales />
        <UsersGraph />
        <TargetXReality />
        <CustomerSatisfaction />
        <TopSellers />
      </>
    )
  }
  
export default DashboardAdm
  