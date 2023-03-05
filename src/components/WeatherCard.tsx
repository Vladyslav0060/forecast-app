import React, { FC } from 'react';

type CardType = {
	city: string;
	temperature: string;
	weather_condition: string;
};

interface CardProps {
	data: CardType;
}

const WeatherCard: FC<CardProps> = ({ data }) => {
	console.log(data);
	return (
		<div className="weather-main wrapper">
			<div className="weather-main">
				<h3 className="weather-main city">{data.city}</h3>
				<h2 className="weather-main temperature">{data.temperature}</h2>
				<h4 className="weather-main clouds-condition">
					{data.weather_condition}
				</h4>
			</div>
		</div>
	);
};

export default WeatherCard;
