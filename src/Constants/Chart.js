import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsSankey from "highcharts/modules/sankey";
import * as Constant from './Constants';


const Chart = () => {
  Highcharts.theme = {
      colors: ['#058DC7', '#50B432', '#ED561B', '#a60d69', '#24CBE5', '#64E572',
              '#FF9655', '#7315bf', '#6AF9C4'],
      chart: {
          backgroundColor: '#1c1b1b',
      },
      title: {
          style: {
              color: '#fff',
              font: '1.25rem "Noto Sans JP", Verdana, sans-serif'
          }
      },
      subtitle: {
          style: {
              color: 'rgb(108, 117, 125)',
              font: '1rem "Noto Sans JP", Verdana, sans-serif'
          }
      },
      legend: {
          itemStyle: {
              font: '0.8rem Noto Sans JP, Verdana, sans-serif',
              color: 'black'
          },
          itemHoverStyle:{
              color: 'gray'
          }
      }
  };
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  HighchartsSankey(Highcharts); //init module

  const options = {
      chart: {
          type: 'sankey',
          height: '1000px',
          margin: [60, 20, 20, 20],
      },
      title: {
          text: 'A Little About Me',
          margin: 20,
          y: 30
      },
      accessibility: {
          point: {
              valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
          }
      },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '1rem',
                    textOutline: "0px",
                    color: '#fff'
                }
            }
        }
    },
      series: [{
          keys: ['from', 'to', 'weight'],
          data: Constant.chartData,
          type: 'sankey',
          name: 'A Little About Me',
      }]

  };

  return (
    <div className="mb-3">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default Chart;

