import React from 'react';
import {
	Container,
	FirstPage,
	HomeNav,
	NavContent,
	Logo,
	NavLinks,
	NavLink,
	LargeTitle,
	LargeSubtitle,
	RegisterButton,
	MiddleSection,
	SmallLink,
	FlexRow,
	HabitStage,
	LastPage,
	AppFeatures,
	FooterSmall,
} from './Home.styled';
import AppScreenshot from '../../assets/images/appScreenshot.png';
import Icon from '../Shared/Icon/Icon';

const Home = () => (
	<Container>
		<HomeNav>
			<NavContent>
				<Logo>
					<Icon name="logo" />
					Habit Tracker
				</Logo>
				<NavLinks>
					<NavLink to="/auth/register" highlight>
						Register
					</NavLink>
					<NavLink to="/auth/login">Login</NavLink>
				</NavLinks>
			</NavContent>
		</HomeNav>
		<FirstPage>
			<LargeTitle>Habit Tracker helps you build and maintain your habits.</LargeTitle>
			<Icon name="logo" />
			<LargeSubtitle>Sign up to quickly and easily define your first habit.</LargeSubtitle>
			<RegisterButton>Get Started</RegisterButton>
		</FirstPage>
		<MiddleSection>
			<LargeTitle>Forty percent of what we do every day is an unthinking habit.*</LargeTitle>
			<LargeSubtitle>
				By shaping our habits, we can consciously direct our lives
			</LargeSubtitle>
			<SmallLink href="https://dornsife.usc.edu/assets/sites/545/docs/Wendy_Wood_Research_Articles/Habits/Neal.Wood.Quinn.2006_Habits_a_repeat_performance.pdf">
				* Duke University (2006) - Current Trends in Psychological Science
			</SmallLink>
			<FlexRow>
				<HabitStage>
					<Icon name="write" color="#5CBC9A" />
					<h3>Define</h3>
					<p>Choose which habits you want in your life. Start small.</p>
				</HabitStage>
				<HabitStage>
					<Icon name="bell" color="#878787" />
					<h3>Remind</h3>
					<p>It’s easy to forget — receive an alert when it’s time to start.</p>
				</HabitStage>
				<HabitStage>
					<Icon name="log" color="#878787" />
					<h3>Log</h3>
					<p>Keep track of your habits to get insights based on solid data.</p>
				</HabitStage>
				<HabitStage>
					<Icon name="computerGraph" color="#878787" />
					<h3>Review</h3>
					<p>Celebrate your successes and learn from your missteps.</p>
				</HabitStage>
			</FlexRow>
		</MiddleSection>
		<LastPage>
			<LargeTitle>Focus on staying on top of your habits.</LargeTitle>
			<FlexRow>
				<AppFeatures>
					<Icon name="tick" color="#5CBC9A" />
					<h3>View Habits</h3>
					<p>Easily see all your habits at a glance</p>
				</AppFeatures>
				<AppFeatures>
					<Icon name="tick" color="#5CBC9A" />
					<h3>Logs Habits</h3>
					<p>Keep track of when you complete your habits</p>
				</AppFeatures>
				<AppFeatures>
					<Icon name="tick" color="#5CBC9A" />
					<h3>Review Habits</h3>
					<p>See insights about yours habits over time</p>
				</AppFeatures>
			</FlexRow>
			<img src={AppScreenshot} alt="Screenshot of the app" width="873" />
			<LargeSubtitle>
				<Icon name="rocket" color="#e5e5e5" />
				The first step to staying on top of your habits is to define your first habit.
			</LargeSubtitle>
			<RegisterButton>Get Started</RegisterButton>
			<FooterSmall>Icon attribution can go down here</FooterSmall>
		</LastPage>
	</Container>
);

export default Home;
