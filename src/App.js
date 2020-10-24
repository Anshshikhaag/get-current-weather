import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

//api call api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
const API_Key="3bf44cc5595bc4974bb1d9c8df4083cc";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      description: "",
      main: undefined,
      celsius:undefined,
      temp_max: undefined,
      temp_min: undefined,
      error: false

    };
  

    this.weathericon={
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  calCelsius(temp){
    let cell =Math.floor(temp-273.15);
    return cell;
  }

  get_weathericon(icons, rangeId){
     switch(true){
        case rangeId>=200 && rangeId<=232:
          this.setState({icon: this.weathericon.Thunderstorm});
          break;
        case rangeId>=300 && rangeId<=321:
          this.setState({icon: this.weathericon.Drizzle});
          break; 
        case rangeId>=500 && rangeId<=521:
            this.setState({icon: this.weathericon.Rain});
            break;
        case rangeId>=600 && rangeId<=622:
              this.setState({icon: this.weathericon.Snow});
              break;
        case rangeId>=701 && rangeId<=781:
              this.setState({icon: this.weathericon.Atmosphere});
               break;
        case rangeId===800:
              this.setState({icon: this.weathericon.Clear});
               break;
        case rangeId>=801 && rangeId<=804:
              this.setState({icon: this.weathericon.Clouds});
              break;
        default:
          this.setState({icon: this.weathericon.Clouds});
     }
  }
  getWeather = async(event) => {

    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    if(city && country){
    const api_call =await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`
      );
   
    const response = await api_call.json()
    console.log(response);

    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      description: response.weather[0].description,
      celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
    });

    this.get_weathericon(this.weathericon,response.weather[0].id)
  }else{
    this.setState({error: true});

  }
  };


  render(){
    return( 
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error}/>
        <Weather city={this.state.city} 
        country={this.state.country} 
        celsius = {this.state.celsius} 
        description={this.state.description}
        temp_max= {this.state.temp_max}
        temp_min={this.state.temp_min} 
        weathericon={this.state.icon}
       />
    </div>
    );
  }
}

export default App;
