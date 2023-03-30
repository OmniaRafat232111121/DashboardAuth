import React from 'react'
import ReactApexChart from 'react-apexcharts';

const Charts1 = () => {
  const chart = {

    series: [{
      name: 'series1',
      data: [80, 75, 38, 83, 62, 109, 100]
    }, {
      name: 'series2',
      data: [100, 32, 45, 60, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 400,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width:1,
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },


  };
  return (
    <div id="chart">
      <ReactApexChart options={chart.options} series={chart.series} type="area" height={350} />
    </div>
  )
}

export default Charts1