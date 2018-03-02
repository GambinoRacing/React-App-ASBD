import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Api from '../../Api'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import * as Recharts from 'recharts';
import { getMeteoData } from '../../api/remote';

const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar, ResponsiveContainer, LabelList, BarChart } = Recharts;

// let data = [
//   { date: '2018-01-27', Temp: "400" , Rain: 2400, Apress: "400", Snow: 3700, WindSpeed: "400" },
//   { date: '2018-01-28', Temp: "400", Rain: 1398, Apress: "400", Snow: 2510, WindSpeed: 200 },
//   { date: '2018-01-29', Temp: "400", Rain: 9800, Apress: "400", Snow: 6690, WindSpeed: 300 },
//   { date: '2018-01-30', Temp: "400", Rain: 3908, Apress: 7000, Snow: 4300, WindSpeed: 400 },
//   { date: '2018-01-31', Temp: 1890, Rain: 4800, Apress: 6181, Snow: 5281, WindSpeed: 500 },
//   { date: '2018-02-01', Temp: 2390, Rain: 3800, Apress: 8500, Snow: 7800, WindSpeed: 600 },
//   { date: '2018-02-02', Temp: 3490, Rain: 4300, Apress: 9100, Snow: 4700, WindSpeed: 200 },
// ];

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
      daysBefore: 1,
      data: []
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.handleDaysBefore = this.handleDaysBefore.bind(this);
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
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
    this.getData(this.formatDate(this.state.controllerDate), this.state.value, this.state.daysBefore)
  }


  async getData(date, station, days) {

    const data = await getMeteoData(date, station, days)

    let castedDATA = this.castValues(data['MeteoData']);
    this.setState({ data: castedDATA })
    console.log(this.state);
  }



  castValues(data) {

    let result = [];

    for (var object of data) {
      object['Rain'] = parseFloat(object['Rain'].replace(',', '.'))
      object['Snow'] = parseFloat(object['Snow'].replace(',', '.'))
      object['Apress'] = parseFloat(object['Apress'].replace(',', '.'))
      object['Apress'] = object['Apress'] / 1000;
    }

    return data

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
              <DatePicker hintText="Изберете дата" onChange={this.handleChangeDate} formatDate={this.formatDate} />
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

        {/* <div className="row">
          <div className="col-md-12">
            <BarChart width={600} height={300} data={this.state.data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Temp" stackId="a" fill="#8884d8" />
              <Bar dataKey="Rain" stackId="a" fill="#82ca9d" />
            </BarChart> */}

        <div className="row">
          <div className="col-md-12">
            <ComposedChart width={1100} height={700} data={this.state.data} stackOffset="expand">
              <XAxis dataKey="Date" interval={3} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Area type='monotone' dataKey='Apress' fill='#726a64' stroke='#726a64' />
              <Bar dataKey='Rain' barSize={20} fill='#000cff'>
                <LabelList dataKey="Rain" position="top" />
              </Bar>
              <Bar dataKey='Snow' barSize={20} fill='#6387ff'>
                <LabelList dataKey="Snow" position="top" />
              </Bar>
              <Line type='monotone' dataKey='Temp' stroke='#ff0000' />
              <Line type='monotone' dataKey='WindSpeed' stroke='#00ff1a' />
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



