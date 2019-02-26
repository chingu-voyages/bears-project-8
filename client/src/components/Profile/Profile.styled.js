import styled from 'styled-components';
import { lighten, darken } from 'polished';

import { $grey, $white } from '../../assets/styledVars';

import { ButtonWrapper } from '../Shared/Button/Button.styled';

export const SectionTitle = styled.h2`
	font-weight: normal;
	line-height: normal;
	font-size: 16px;
	margin-bottom: 10px;
`;

export const ProfileSection = styled.section`
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 30% 1fr;
`;

export const UserName = styled.h2`
	font-size: 1.2rem;
	padding: 1.5rem 0 0rem;
	font-weight: 400;
	text-align: center;
	color: ${darken(0.1, $grey)};
`;

export const Sidebar = styled.aside`
	display: flex;
	flex-direction: column;
	background-color: ${lighten(0.5, $grey)};
	border-radius: 6px 0 0 6px;
	padding: 1.5rem;
`;

export const UserInfo = styled.div`
	padding: 1.5rem;
	padding-top: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	flex: 1 1 auto;

	& .user__tags {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 3rem;
	}

	& .user__info {
		text-align: center;
		font-size: 14px;
		margin-bottom: 3rem;

		& em {
			font-weight: 300;
			margin-bottom: 1rem;
		}
	}
`;

export const Label = styled.span`
	background-color: ${lighten(0.2, $grey)};
	color: ${$white};
	border-radius: 5px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	margin: 3px;
	font-size: 14px;
	line-height: 0;
`;

export const UserActions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.5rem;
	padding-top: 0;

	${ButtonWrapper} {
		margin-bottom: 1rem;
	}
`;

export const Dashboard = styled.div`
	display: grid;
	grid-template-rows: min-content 1fr;
	background-color: ${$white};
	border-radius: 0 6px 6px 0;

	& .dashboard__friends {
		display: flex;
		justify-content: flex-start;
		padding: 2rem;
		padding-bottom: 0;
	}

	& .dashboard__goals {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		height: 80%;
		font-weight: 300;
	}
`;

export const Connections = styled.div`
	padding: 4rem;
	padding-bottom: 0;

	& p:first-of-type {
		margin-top: 1rem;
		font-size: 14px;
	}
`;

export const Goals = styled.div`
	padding: 4rem;

	& p:first-of-type {
		margin-top: 1rem;
		font-size: 14px;
	}
`;

export const Goal = styled.div``;
