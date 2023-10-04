import { StyledCustomerSatisfaction } from "./style"
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip } from "chart.js"
import { Line } from "react-chartjs-2"
import lineblue from "@/assets/lineblue.png"
import linegreen from "@/assets/linegreen.png"

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip)

function CustomerSatisfaction() {
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
     {
      label: "This Month",
      data: [700, 618, 668, 593, 693, 543, 743],
      backgroundColor: "#ffffff",
      borderColor: "#05C283",
      tension: 0.4,
      fill: 'end'
    },
    {
      label: "Last Month",
      data: [470, 533, 429, 455, 490, 480, 533],
      backgroundColor: (context)=>{
        if(!context.chart.chartArea){
          return
        }
        const {ctx, chartArea: {top, bottom}} = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
        gradientBg.addColorStop(0, "rgb(201 248 233)")
        gradientBg.addColorStop(1, "#ffffff")

        
        return gradientBg
      },
      borderColor: "#0095FF",
      tension: 0.4,
      fill: 'end'
    },
    {
      label: "Last Month",
      data: [470, 533, 429, 455, 490, 480, 533],
      backgroundColor: (context)=>{
        if(!context.chart.chartArea){
          return
        }
        const {ctx, chartArea: {top, bottom}} = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
        gradientBg.addColorStop(0, "#b5e5fa")
        gradientBg.addColorStop(1, "#ffffff")

        
        return gradientBg
      },
      borderColor: "#0095FF",
      tension: 0.4,
      fill: true
    },
  ]
  }
  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
        }
      }, 
      
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
        }
      }
    }
  }

    return (
      <StyledCustomerSatisfaction>
        <p>Customer Satisfaction</p>
        <div className="graph">
          <Line
            data={data}
            options={options}
          />
        </div>
        <div className="h2"/>
        <div className="content">
          <div>
            <img src={lineblue} alt="stats"/>
            <div>
              <p>Last Month</p>
              <span>$3,004</span>
            </div>
          </div>

          <div/>

          <div>
            <img src={linegreen} alt="stats"/>
            <div>
              <p>This Month</p>
              <span>$4,504</span>
            </div>
          </div>
        </div>
      </StyledCustomerSatisfaction>
    )
  }
  
export default CustomerSatisfaction
