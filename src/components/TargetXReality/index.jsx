import { StyledTargetXReality } from "./style"
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"
import { Bar } from "react-chartjs-2"
import reality from "@/assets/reality.png"
import target from "@/assets/target.png"

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function TargetXReality() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
    datasets: [
      {
        label: "Reality Sales",
        data: [1149, 1038, 948, 1223, 1448, 1448, 1448],
        backgroundColor: "#4ab58e",
        borderRadius: 3
      },
      {
        label: "Target Sales",
        data: [1479, 1488, 1759, 1488, 1959, 1959, 1959],
        backgroundColor: "#ffcf00",
        borderRadius: 3
      },
    ]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }, 
      
      x: {
        grid: {
          display: false
        }
      }
    }
  }

    return (
      <StyledTargetXReality>
        <p>Target x Reality</p>
        <div className="graph">
          <Bar
            data={data}
            options={options}
          />
        </div>
        <div className="content">
          <div className="reality">
            <div><img src={reality} alt="Reality"/></div>
            <div>
              <p>Reality Sales</p>
              <span>Global</span>
            </div>
            <p>8.823</p>
          </div>
          <div className="target">
            <img src={target} alt="Target"/>
            <div>
              <p>Target Sales</p>
              <span>Commercial</span>
            </div>
            <p>12.122</p>
          </div>
        </div>
      </StyledTargetXReality>
    )
  }
  
export default TargetXReality
  