import React from 'react';
import {
	Container,
	FirstPage,
	HomeNav,
	NavContent,
	SmallLogo,
	Logo,
	NavLinks,
	NavLink,
	MainTitle,
	LargeLogo,
	MainSubtitle,
	TopRegisterButton,
} from './Home.styled';

const Home = () => (
	<Container>
		<FirstPage>
			<HomeNav>
				<NavContent>
					<Logo>
						{/* TODO: Make a shared SVG icon component that injects svg code */}
						<SmallLogo viewBox="26 70 274 226">
							<path
								d="M278.9 112.382L263.104 85.1174L180.445 227.498L129.812 140.079H97.7868L180.445 283.108L278.9 112.382Z"
								fill="#BBEAD9"
							/>
							<path
								d="M147.854 282.459L179.363 282.412L97.3875 139.637L198.411 139.496L214.424 111.762L49.2273 111.832L147.854 282.459Z"
								fill="white"
							/>
							<path
								d="M65.5897 85.3633L49.8761 112.675L214.51 113.069L164.12 200.629L180.133 228.363L262.671 85.2641L65.5897 85.3633Z"
								fill="#73A292"
							/>
						</SmallLogo>
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
			<MainTitle>Habit Tracker helps you build and maintain your habits.</MainTitle>
			<LargeLogo viewBox="26 70 274 226">
				<path
					d="M278.9 112.382L263.104 85.1174L180.445 227.498L129.812 140.079H97.7868L180.445 283.108L278.9 112.382Z"
					fill="#BBEAD9"
				/>
				<path
					d="M147.854 282.459L179.363 282.412L97.3875 139.637L198.411 139.496L214.424 111.762L49.2273 111.832L147.854 282.459Z"
					fill="white"
				/>
				<path
					d="M65.5897 85.3633L49.8761 112.675L214.51 113.069L164.12 200.629L180.133 228.363L262.671 85.2641L65.5897 85.3633Z"
					fill="#73A292"
				/>
			</LargeLogo>
			<MainSubtitle>Sign up to quickly and easily define your first habit.</MainSubtitle>
			<TopRegisterButton>Get Started</TopRegisterButton>
		</FirstPage>
	</Container>
);

export default Home;
