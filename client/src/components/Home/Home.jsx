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
	HabitStages,
	HabitStage,
	LastPage,
	AppFeatures,
	AppFeature,
	FooterSmall,
	StyledScreenshot,
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
			<RegisterButton href="/auth/register">Get Started</RegisterButton>
		</FirstPage>
		<MiddleSection>
			<LargeTitle>Forty percent of what we do every day is an unthinking habit.*</LargeTitle>
			<LargeSubtitle>
				By shaping our habits, we can consciously direct our lives
			</LargeSubtitle>
			<SmallLink href="https://dornsife.usc.edu/assets/sites/545/docs/Wendy_Wood_Research_Articles/Habits/Neal.Wood.Quinn.2006_Habits_a_repeat_performance.pdf">
				* Duke University (2006) - Current Trends in Psychological Science
			</SmallLink>
			<HabitStages>
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
			</HabitStages>
			<Icon name="circle" width={288} height={288} color="#E7D8EF" id="circle__one" />
			<Icon name="circle" width={169} height={169} color="#D5F1E7" id="circle__two" />
			<Icon name="circle" width={260} height={260} color="#D5F1E7" id="circle__three" />
		</MiddleSection>
		<LastPage>
			<LargeTitle>Focus on staying on top of your habits.</LargeTitle>
			<AppFeatures>
				<AppFeature>
					<Icon name="tick" color="#5CBC9A" />
					<h3>View Habits</h3>
					<p>Easily filter through your habits at a glance</p>
				</AppFeature>
				<AppFeature>
					<Icon name="tick" color="#5CBC9A" />
					<h3>Log Habits</h3>
					<p>Keep track of when you complete your habits</p>
				</AppFeature>
				<AppFeature>
					<Icon name="tick" color="#5CBC9A" />
					<h3>Review Habits</h3>
					<p>See insights about your habits over time</p>
				</AppFeature>
			</AppFeatures>
			<StyledScreenshot src={AppScreenshot} alt="Screenshot of the app" />
			<LargeSubtitle>
				<Icon name="rocket" color="#e5e5e5" />
				The first step to staying on top of your habits is to define your first habit.
			</LargeSubtitle>
			<RegisterButton href="/auth/register">Get Started</RegisterButton>
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
			<Icon name="circle" width={180} height={180} color="#E7D8EF" id="circle__four" />
			<Icon name="circle" width={280} height={280} color="#D5F1E7" id="circle__five" />
			<Icon name="circle" width={180} height={180} color="#E7D8EF" id="circle__six" />
			<Icon name="circle" width={290} height={290} color="#D5F1E7" id="circle__seven" />
		</LastPage>
	</Container>
);

export default Home;
