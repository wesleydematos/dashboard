import { StyledUsersGraph } from "./style"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

Chart.register(ArcElement, Tooltip, Legend)

function UsersGraph() {
  const data = {
    labels: ["Now", "Returning", "Inactive"],
    datasets: [{
      label: "Users",
      data: [2607, 547, 968],
      backgroundColor: ["#1b59f8", "#4e7ef9", "#e5e5e5"],
      hoverOffset: 4,
      spacing: 2,
      borderRadius: 3
    }]
  }

  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }

    return (
      <StyledUsersGraph>
        <div className="texts">
          <p>Users</p>
          <span>4,209</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <div/>
              <p>62% Now</p>
            </li>
            <li>
              <div/>
              <p>13% Returning</p>
            </li>
            <li>
              <div/>
              <p>23% Inactive</p>
            </li>
          </ul>
          <div className="graph">
            <Doughnut
              data={data}
              options={options}
            />
          </div>
        </div>
      </StyledUsersGraph>
    )
  }
  
export default UsersGraph
  