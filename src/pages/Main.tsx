import { WeatherCard, WeatherIcon } from '../components';
import '../styles/Main.scss';
import '../index.scss';

const Main = () => {
	return (
		<div className="wrapper">
			<div className="main">
				<WeatherCard
					data={{
						city: 'Mio',
						temperature: '12°',
						weather_condition: 'Partly Cloudy',
					}}
				/>
				<div className="weather-icon">
					<WeatherIcon icon="nightclear" />
				</div>
				<div className="main__modal">
					<div className="main__modal__header">
						<div className="main__modal__header__tabs">
							<button className="main__modal__header__tabs tab">
								Hourly forecast
							</button>
							<button className="main__modal__header__tabs tab">
								Weekly forecast
							</button>
						</div>
					</div>
					<div className="main__modal__content">
						<div className="main__modal__content__cards">
							<div className="main__modal__content__cards__card card">
								<div className="card__time">12 AM</div>
								<div className="card__icon">
									<WeatherIcon icon="clear" />
								</div>
								<div className="card__temperature">19°</div>
							</div>
							<div className="main__modal__content__cards__card card">
								<div className="card__time">12 AM</div>
								<div className="card__icon">
									<WeatherIcon icon="cloudy" />
								</div>
								<div className="card__temperature">19°</div>
							</div>
							<div className="main__modal__content__cards__card card">
								<div className="card__time">12 AM</div>
								<div className="card__icon">
									<WeatherIcon icon="cloudyandrainy" />
								</div>
								<div className="card__temperature">19°</div>
							</div>
							<div className="main__modal__content__cards__card card">
								<div className="card__time">12 AM</div>
								<div className="card__icon">
									<WeatherIcon icon="heavyrainandstorm" />
								</div>
								<div className="card__temperature">19°</div>
							</div>
							<div className="main__modal__content__cards__card card">
								<div className="card__time">12 AM</div>
								<div className="card__icon">
									<WeatherIcon icon="night" />
								</div>
								<div className="card__temperature">19°</div>
							</div>
							<div className="main__modal__content__cards__card card">
								<div className="card__time">12 AM</div>
								<div className="card__icon">
									<WeatherIcon icon="nightclear" />
								</div>
								<div className="card__temperature">19°</div>
							</div>
						</div>
						<div className="main__modal__content__nav-menu"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
