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
    this.state = { stations: null }
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ value: event.value });
    this.setState({ label: event.label });
    console.log('Boolean Select value changed to', event.value);
  }


  componentDidMount() {
    this.getStations()
  }

  // http://localhost:56348/api?Station=1010&date=2018-01-27&days=5
  getStations = () => {
    Api.get({
      url:'http://localhost:56348/api/stations',
      success: this.setStations
    })
  }

  getWeather = () => {
    Api.get({
      url:'http://localhost:56348/api',
      data:{
        station:this.state.value,
         date:'2018-01-27',
        days:5
      },
      success: this.setWeather
    })
   
  }


  setWeather = (weatherData) => {
      console.log(weatherData)
  }
  setStations = (response) => {

   let options = response[0].Stations.map((option)=> {
      return {value:option.value, label: option.value + ': ' + option.label}
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
      <div className="row">
        <div className="col-md-3">
          <Select
            onChange={this.onChange}
            //options={this.state.options}
            options={this.state.options}
            value={this.state.value}
            clearable={false}
          />
        </div>

        <div className="col-md-3">
          <DatePicker hintText="Portrait Dialog"/>
        </div>

        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Брой дни назад"
          aria-label="Username" aria-describedby="basic-addon1"></input>
        </div>

        <div className="col-md-3">
          <RaisedButton label="Покажи" primary={true}  onClick={this.getWeather} />
        </div>
      </div>
  </div>
  );
}
}

