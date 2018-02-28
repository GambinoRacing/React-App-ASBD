import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Api from '../../Api'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { Recharts, LineChart, Line } from 'recharts';


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        // { value: true, label: 'Yes' },
        // { value: false, label: 'No' },
      ],
      value: '',
    }
    this.state = {
      stations: null,
      controllerDate: '',
      daysBefore: 1
    };
  
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleDaysBefore = this.handleDaysBefore.bind(this);

    // const {PropTypes} = React;
    // const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } = Recharts;
    // const data = [
    //   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    //   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    //   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    //   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    //   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    //   { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    //   { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    // ];
  }

  handleDaysBefore(e) {
    this.setState({ [e.target.name]: e.target.value });
}

  handleChangeDate = (event, date) => {
    this.setState({
      controllerDate: date
    });
  };

  onSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state.value)
    console.log(this.state.controllerDate)
    console.log(this.state.daysBefore)
  }

  onChange(event) {
    this.setState({ value: event.value });
    // this.setState({ label: event.label });
    //console.log('Boolean Select value changed to', event.value);
  }

  componentDidMount() {
    this.getStations()
  }

  // http://localhost:56348/api?Station=1010&date=2018-01-27&days=5
  getStations = () => {
    Api.get({
      url: 'http://localhost:56348/api/stations',
      success: this.setStations
    })
  }

  getWeather = () => {
    Api.get({
      url: 'http://localhost:56348/api',
      data: {
        station: this.state.value,
        date: '2018-01-27',
        days: 5
      },
      success: this.setWeather
    })

  }

  setWeather = (weatherData) => {
    console.log(weatherData)
  }

  formatDate(date) {
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  }

  setStations = (response) => {
    let options = response[0].Stations.map((option) => {
      return { value: option.value, label: option.value + ': ' + option.label }
    })

    this.setState({
      options
    })
  }

 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">Изберете № на станция</div>
          <div className="col-md-3">Изберете дата</div>
          <div className="col-md-3">Брой дни назад</div>
          <div className="col-md-3"></div>
        </div>

        <form onSubmit={this.onSubmitHandler}>
          <div className="row">
            <div className="col-md-3">
              <Select
                onChange={this.onChange}
                //options={this.state.options}
                options={this.state.options}
                value={this.state.value}
                clearable={false}
                placeholder="Изберете станция"
              />
            </div>


            <div className="col-md-3">
              <DatePicker hintText="Изберете дата" onChange={this.handleChangeDate} />
            </div>

            <div className="col-md-3">
              <input type="number" name="daysBefore" className="form-control" placeholder="Брой дни назад"
                aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleDaysBefore} value={this.state.daysBefore}></input>
            </div>

            <div className="col-md-3">
              <RaisedButton type="submit" label="Покажи" primary={true} />
            </div>
          </div>
        </form>

        {/* <LineChart width={600} height={300} data={this.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis yAxisId="left" />
       <YAxis yAxisId="right" orientation="right" />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> */}

      </div>
    );
  }
}

// ReactDOM.render(
//   <LineBarAreaComposedChart />,
//   document.getElementById('container')
// );



