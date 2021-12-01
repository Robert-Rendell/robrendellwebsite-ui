import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import axios from 'axios';
import config from '../../../config';

class UniDataVisualiserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      options: {
        title: {
          text: 'My chart'
        },
        series: [{
          data: [1, 2, 3]
        }]
      }
    };
  }

  /**
   * Object the back end returns:
   * 
   * rawData: {
      submissions: string;
      institutions: string;
    };
    bestUnisForSubject: string[],
    submissionsPerYear: string[],
    listOfSubjectsAndWhereToStudy: string[];
    covid19CasesPerInstitution: string[];
   */
  componentDidMount() {
    axios.get(`${config.backend}/tech-tests/291121/getDashboardGraphs`, { 
      headers: {'Content-Type': 'application/json'},
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <HighchartsReact
      highcharts={Highcharts}
      options={this.state.options}
    />
    )
  }
}

export { UniDataVisualiserComponent as default }
