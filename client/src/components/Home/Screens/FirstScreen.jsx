import React from 'react';
import Icon from '../../Shared/Icon/Icon';
import StyledFirstScreen from './FirstScreen.styled';
import { LargeTitle, LargeSubtitle, RegisterButton } from '../Home.styled';

export default () => (
	<StyledFirstScreen>
		<LargeTitle>Habit Tracker helps you build and maintain your habits.</LargeTitle>
		<Icon name="logo" />
		<LargeSubtitle>Sign up to quickly and easily define your first habit.</LargeSubtitle>
		<RegisterButton to="/auth/register">Get Started</RegisterButton>
	</StyledFirstScreen>
);
