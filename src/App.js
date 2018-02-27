import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage/HomePage';
import weather from './components/weather/weather';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <div className="main-content">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/weather" component={weather} />
                        </Switch>
                    </div>
       
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withRouter(App);
