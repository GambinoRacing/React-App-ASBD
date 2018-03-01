import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Api from '../../Api'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import * as Recharts from 'recharts';

const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar } = Recharts;

const data = [
  { name: '2018-01-27', Temp: 4000, Rain: 2400, Apress: 7400, Snow: 3700 },
  { name: '2018-01-28', Temp: 3000, Rain: 1398, Apress: 8210, Snow: 2510 },
  { name: '2018-01-29', Temp: 2000, Rain: 9800, Apress: 9290, Snow: 6690 },
  { name: '2018-01-30', Temp: 2780, Rain: 3908, Apress: 7000, Snow: 4300 },
  { name: '2018-01-31', Temp: 1890, Rain: 4800, Apress: 6181, Snow: 5281 },
  { name: '2018-02-01', Temp: 2390, Rain: 3800, Apress: 8500, Snow: 7800 },
  { name: '2018-02-02', Temp: 3490, Rain: 4300, Apress: 9100, Snow: 4700 },
];

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

        <div className="row">
          <div className="col-md-12">
            <LineChart width={800} height={400} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              
              <Line yAxisId="left" type="monotone" dataKey="Rain" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="Temp" stroke="#82ca9d" />
              <Line yAxisId="right" type="monotone" dataKey="Apress" stroke="#ff0f0f" />
              <Line yAxisId="right" type="monotone" dataKey="Apress" stroke="#ff0f0f" />
            </LineChart>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <ComposedChart width={800} height={400} data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Area type='monotone' dataKey='Apress' fill='#726a64' stroke='#726a64' />
              <Bar dataKey='Rain' barSize={20} fill='#000cff' />
              <Bar dataKey='Snow' barSize={20} fill='#6387ff' />
              <Line type='monotone' dataKey='Temp' stroke='#ff0000' />
            </ComposedChart>
          </div>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(
//   <LineBarAreaComposedChart />,
//   document.getElementById('container')
// );



