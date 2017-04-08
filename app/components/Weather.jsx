var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState() {
    var location = 'Tallinn';
    this.initialSearch(location);

    return {isLoading: true};
  },
  initialSearch(location){
    var that = this;

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        isLoading: false,
        location: location,
        temp: temp.toString()
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  handleSearch(location) {
    this.setState({isLoading: true});
    this.initialSearch(location);
  },
  render(){
    const {isLoading, temp, location} = this.state;

    function renderMessage() {
      if (isLoading){
        return <h3>Fetching weather...</h3>
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;