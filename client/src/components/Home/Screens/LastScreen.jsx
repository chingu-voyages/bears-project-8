import React from 'react';
import { lighten } from 'polished';
import {
	LastPage,
	AppFeatures,
	AppFeature,
	FooterSmall,
	StyledScreenshot,
} from './LastScreen.styled';
import { LargeTitle, LargeSubtitle, RegisterButton } from '../Home.styled';
import { $violet, $elfGreen, $grey } from '../../../assets/styledVars';
import Icon from '../../Shared/Icon/Icon';
import AppScreenshot from '../../../assets/images/appScreenshot.png';

export default () => (
	<LastPage>
		<LargeTitle>Focus on staying on top of your habits.</LargeTitle>
		<AppFeatures>
			<AppFeature>
				<Icon name="tick" color={$elfGreen} />
				<h3>View Habits</h3>
				<p>Easily filter through your habits at a glance</p>
			</AppFeature>
			<AppFeature>
				<Icon name="tick" color={$elfGreen} />
				<h3>Log Habits</h3>
				<p>Keep track of when you complete your habits</p>
			</AppFeature>
			<AppFeature>
				<Icon name="tick" color={$elfGreen} />
				<h3>Review Habits</h3>
				<p>See insights about your habits over time</p>
			</AppFeature>
		</AppFeatures>
		<StyledScreenshot src={AppScreenshot} alt="Screenshot of the app" />
		<LargeSubtitle>
			<Icon name="rocket" color={lighten(0.4, $grey)} />
			The first step to staying on top of your habits is to define your first habit.
		</LargeSubtitle>
		<RegisterButton to="/auth/register">Get Started</RegisterButton>
		<FooterSmall>
			<div>
				Icons made by{' '}
				<a href="https://www.freepik.com/" title="Freepik">
					Freepik
				</a>{' '}
				from{' '}
				<a href="https://www.flaticon.com/" title="Flaticon">
					www.flaticon.com
				</a>{' '}
				is licensed by{' '}
				<a
					href="http://creativecommons.org/licenses/by/3.0/"
					title="Creative Commons BY 3.0"
					target="_blank"
					rel="noopener noreferrer"
				>
					CC 3.0 BY
				</a>
			</div>
		</FooterSmall>
		<Icon
			name="circle"
			width={180}
			height={180}
			color={lighten(0.3, $violet)}
			id="circle__four"
		/>
		<Icon
			name="circle"
			width={280}
			height={280}
			color={lighten(0.2, $elfGreen)}
			id="circle__five"
		/>
		<Icon
			name="circle"
			width={180}
			height={180}
			color={lighten(0.3, $violet)}
			id="circle__six"
		/>
		<Icon
			name="circle"
			width={290}
			height={290}
			color={lighten(0.2, $elfGreen)}
			id="circle__seven"
		/>
	</LastPage>
);
