import React from 'react';

import { ReactComponent as Clear } from '../assets/svg/Clear.svg';
import { ReactComponent as Cloudy } from '../assets/svg/Cloudy.svg';
import { ReactComponent as Sunny } from '../assets/svg/Sunny.svg';
import { ReactComponent as Rain } from '../assets/svg/Rain.svg';
import { ReactComponent as Thunder } from '../assets/svg/Thunder.svg';
import { ReactComponent as CloudyAndRainy } from '../assets/svg/CloudyAndRainy.svg';
import { ReactComponent as NightCloudy } from '../assets/svg/NightCloudy.svg';
import { ReactComponent as Night } from '../assets/svg/Night.svg';
import { ReactComponent as NightClear } from '../assets/svg/NightClear.svg';
import { ReactComponent as HeavyRainAndStorm } from '../assets/svg/HeavyRainAndStorm.svg';
import { ReactComponent as NightRain } from '../assets/svg/NightRain.svg';

type WeatherIconName =
	| 'clear'
	| 'cloudy'
	| 'sunny'
	| 'rain'
	| 'thunder'
	| 'cloudyandrainy'
	| 'nightcloudy'
	| 'night'
	| 'nightclear'
	| 'heavyrainandstorm'
	| 'nightrain';

interface WeatherIconProps {
	icon: WeatherIconName;
}

const svgComponents: {
	[key in WeatherIconName]: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
} = {
	clear: Clear,
	cloudy: Cloudy,
	sunny: Sunny,
	rain: Rain,
	thunder: Thunder,
	cloudyandrainy: CloudyAndRainy,
	nightcloudy: NightCloudy,
	night: Night,
	nightclear: NightClear,
	heavyrainandstorm: HeavyRainAndStorm,
	nightrain: NightRain,
};

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon }) => {
	const SvgComponent = svgComponents[icon];

	return <SvgComponent />;
};

export default WeatherIcon;
