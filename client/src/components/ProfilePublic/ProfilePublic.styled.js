import styled from 'styled-components';
import { lighten } from 'polished';

import { $grey, $violet } from '../../assets/styledVars';

import { UserName, Dashboard } from '../Profile/Profile.styled';

export const ProfileSection = styled.section`
	display: grid;
	width: 100%;
	height: 75vh;
	grid-template-columns: 1fr;
	grid-template-rows: minmax(45%, min-content) 1fr;
`;

export const Header = styled.div`
	background-color: ${lighten(0.5, $grey)};
	border-radius: 6px 0 0 6px;
	padding: 1rem 10rem 0;
	position: relative;

	& .badge__wrapper {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
`;

export const ProfileName = styled(UserName)`
	padding: 0;
`;

export const About = styled(Dashboard)`
	padding: 1rem;

	& .about__friends {
		display: flex;
		justify-content: center;
		padding-bottom: 0;
		font-size: 14px;
		font-weight: 300;
		align-items: center;
		min-height: 130px;
	}

	& .about__goals {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		height: 80%;
		font-weight: 300;
	}

	& .about__title {
		font-weight: normal;
		line-height: normal;
		font-size: 16px;
		margin-bottom: 10px;
		text-align: center;
	}

	& .link {
		color: ${$violet};
		cursor: pointer;
		border-bottom: 1px solid ${$violet};
		margin-left: 0.5rem;
	}
`;
