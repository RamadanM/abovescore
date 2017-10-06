import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import theme from 'fusioncharts/themes/fusioncharts.theme.ocean';

charts(FusionCharts)
theme(FusionCharts)

class SalesChart extends Component {
  render() {
  var chartData = {
        chart: {
         "canvasBgColor": "#ff3d00",
         "divlineColor": "#fafafa",


        },
        data: [{value: 1}, {value: 2}, {value: 3},{value: 5}, {value: 2}, {value: 1}]
    };
    return (
      <div >
        <ReactFC
        type = "Column3D"
        className = "fc-column2d"  // ReactJS attribute-name for DOM classes
        dataFormat = "JSON"
        width='100%'
        height='85%'
        dataSource = {chartData}/>
       </div>
    );
  }
}

export default SalesChart;
