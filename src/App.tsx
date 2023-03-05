import WeatherCard from './components/WeatherCard';
import WeatherIcon from './components/WeatherIcon';
import './App.scss';

function App() {
	return (
		<div className="App">
			<WeatherCard
				data={{
					city: 'Mio',
					temperature: '12°',
					weather_condition: 'Partly Cloudy',
				}}
			/>
			<div className="test">
				<WeatherIcon icon="cloudyandrainy" />
			</div>
		</div>
	);
}

export default App;
