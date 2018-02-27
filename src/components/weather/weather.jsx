import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Api from '../../Api'
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';


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
      controllerDate: ''
     };
    //this.state = { controllerDate: '' };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  handleChangeDate = (event, date) => {
    this.setState({
      controllerDate: date
    });
  };

  onSubmitHandler(e){
    e.preventDefault();
    console.log(this.state.value)
    console.log(this.state.controllerDate)
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

  formatDate(date){
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
              <DatePicker hintText="Изберете дата" onChange={ this.handleChangeDate } />
            </div>

            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Брой дни назад"
                aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>

            <div className="col-md-3">
              <RaisedButton type="submit" label="Покажи" primary={true} />
            </div>
          </div>
        </form>

      </div>
    );
  }
}


