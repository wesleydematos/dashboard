import { Routes, Route, Navigate } from "react-router-dom"
import DashboardAdm  from "./pages/Dashboard/DashboardAdm"

const RoutesMain = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DashboardAdm/>}/>
                <Route path="/leaderboard" element={<DashboardAdm/>}/>
                <Route path="/order" element={<DashboardAdm/>}/>
                <Route path="/products" element={<DashboardAdm/>}/>
                <Route path="/sales-report" element={<DashboardAdm/>}/>
                <Route path="/message" element={<DashboardAdm/>}/>
                <Route path="/settings" element={<DashboardAdm/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default RoutesMain;