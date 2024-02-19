import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { CityInput } from './components/CityInput';
import { WeatherButton } from './components/WeatherButton';
import { WeatherInfo } from './components/WeatherInfo';
import { styles } from "./components/Styles";

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=a6db6214fc9c42d1950191808231010&q=${city},es&aqi=no`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (city) {
      getWeatherData();
    }
  }, [city]);

  const handleTextChange = (text) => {
    setCity(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>WEATHER APP</Text>
      <CityInput value={city} onChangeText={handleTextChange} />
      <WeatherButton onPress={getWeatherData} />
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </ScrollView>
  );
}

