import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ChartDataColor20 } from "../Colors/ChartDataColor20";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options:  {
        series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
        chart: {
        type: 'bar',
        height: 380
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: false,
          dataLabels: {
            position: 'bottom'
          },
        }
      },
      colors:ChartDataColor20,
      dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
          colors: ['white']
        },
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
          'United States', 'China', 'India'
        ],
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      title: {
          text: 'Custom DataLabels',
          align: 'center',
          floating: true,
          
      },
      subtitle: {
          text: 'Category Names as DataLabels inside bars',
          align: 'center',
          color:"white"
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return ''
            }
          }
        }
      }
      },
      
      xaxis: {
        type: 'datetime'
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        // {
        //   name: "series-2",
        //   data: [90, 80, 75, 60, 39, 60, 70, 91]
        // }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="380px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;