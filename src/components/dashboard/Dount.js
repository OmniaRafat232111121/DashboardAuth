import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [30, 15, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        <Chart 
        className='dountt'
        options={this.state.options} 
        series={this.state.series} 
        type="donut" 
        />
      </div>
    );
  }
}

export default Donut;