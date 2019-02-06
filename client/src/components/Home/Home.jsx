import React from 'react';
import { Container } from './Home.styled';
import HomeNav from './HomeNav/HomeNav';
import FirstScreen from './Screens/FirstScreen';
import MiddleScreen from './Screens/MiddleScreen';
import LastScreen from './Screens/LastScreen';

const Home = () => (
	<Container>
		<HomeNav />
		<FirstScreen />
		<MiddleScreen />
		<LastScreen />
	</Container>
);

export default Home;
